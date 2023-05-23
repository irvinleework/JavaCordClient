import React, {Component} from 'react';
import Auth from '../Auth/Auth';
import APIURL from '../../helpers/environment'
import ChannelEntryUpdate from './ChannelEntryUpdate';
import ChannelEntryCreate from './ChannelEntryCreate'
import ChannelEntryDisplay from './ChannelEntryDisplay'
import {ChannelType} from '../Interface/ChannelType'
import { withRouter, WithRouterProps } from '../../services/withRouter'
import { Params } from 'react-router-dom';


interface ChannelEntryType {
    entry: string
    channelEntryId: string
    userName?: string
    user?: any
}

interface AuthProps {
    sessionToken: string | undefined | null
    channel: any
}

interface ChannelEntryState {
    channelEntry: ChannelEntryType[]
    updateActive: boolean
    updatedChannelEntry: ChannelEntryType
}

class ChannelEntry extends Component<AuthProps & WithRouterProps, ChannelEntryState> {
    constructor(props: AuthProps & WithRouterProps) {
        super(props)
        this.state = {
            channelEntry: [],
            updateActive: false,
            updatedChannelEntry: {
                entry: "",
                channelEntryId: ""
            }
        }
    }
    
    getChannelEntry = () => {
        const { match } = this.props;
        console.log("get channel entry called")
        console.log(match.params.channelId)
        fetch(`${APIURL}/channel/${match.params.channelId}/channelentry`, {
            method: "GET",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
    
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState({
                channelEntry: data.messages
            })
            console.log(this.state.channelEntry, "channel entry called")
            console.log(this.state.channelEntry[0].user.userName)
        })
        .catch(err => console.log(err))
    }
    

    componentDidMount = () => {
        this.getChannelEntry()
    }
    componentDidUpdate(prevProps: Readonly<AuthProps & WithRouterProps<Readonly<Params<string>>>>, prevState: Readonly<ChannelEntryState>, snapshot?: any): void {
        const { match } = this.props;
        if (match.params.channelId !== prevProps.match.params.channelId) {
            this.getChannelEntry()
        }
    }
    updateTrue = () => {
        this.setState({updateActive: true})
    }

    updateFalse = () => {
        this.setState({updateActive: false})
    }

    editUpdateChannelEntry = (channelEntryType: ChannelEntryType) => {
        this.setState({updatedChannelEntry: channelEntryType})
    }
    
    deleteChannelEntry = (channelEntryId: string) => {
            const proceed = window.confirm("This will delete your Channel")
            const { match } = this.props;
            if (proceed) {
                console.log("deleteChannelEntry function called")
    
                fetch(`${APIURL}/channel/${match.params.channelId}/channelentry/delete/${channelEntryId}`, {
                    method: "DELETE",
                    headers: new Headers({
                        "Content-Type": "application/json",
                        "Authorization": `${this.props.sessionToken}`
                    })
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    this.getChannelEntry()
                })
                .catch(err => console.log(err))
            } else {
                console.log("Delete Cancelled")
            }
        }
        render() {
            return(
                <div>
                    {this.state.updateActive ? <ChannelEntryUpdate updatedChannelEntry={this.state.updatedChannelEntry} updateFalse={this.updateFalse} getChannelEntry={this.getChannelEntry} sessionToken={this.props.sessionToken}/> : <></>}
                    <ChannelEntryDisplay deleteChannelEntry={this.deleteChannelEntry} updateTrue={this.updateTrue} editUpdateChannelEntry={this.editUpdateChannelEntry} channelEntry={this.state.channelEntry} channel={this.props.channel} getChannelEntry={this.getChannelEntry} sessionToken={this.props.sessionToken}></ChannelEntryDisplay>
                </div>
            )
        }
}
export default withRouter(ChannelEntry)