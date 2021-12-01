import React, {Component} from 'react';
import Auth from '../Auth/Auth';
import APIURL from '../../helpers/environment'
import ChannelEntryUpdate from './ChannelEntryUpdate';
import ChannelEntryCreate from './ChannelEntryCreate'
import ChannelEntryDisplay from './ChannelEntryDisplay'


type ChannelEntryType = {
    entry: string
    id: string
}

type AuthProps = {
    sessionToken: string | undefined | null
}

type ChannelEntryState = {
    channelEntry: ChannelEntryType[]
    updateActive: boolean
    createActive: boolean
    updatedChannelEntry: ChannelEntryType
}

export default class ChannelEntry extends Component<AuthProps, ChannelEntryState> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            channelEntry: [],
            updateActive: false,
            createActive: false,
            updatedChannelEntry: {
                entry: "",
                id: ""
            }
        }
    }
    getChannelEntry = () => {
        console.log("get channel entry called")
        fetch(`${APIURL}/channelentry/`, {
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
                channelEntry: data
            })
            console.log(this.state.channelEntry, "channel entry called")
        })
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getChannelEntry()
    }
    createTrue = () => {
        this.setState({createActive: true})
    }

    createFalse = () => {
        this.setState({createActive: false})
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
    
    deleteChannelEntry = (id: string) => {
            const proceed = window.confirm("This will delete your Channel")
    
            if (proceed) {
                console.log("deleteChannelEntry function called")
                console.log(id)
    
                fetch(`${APIURL}/channelentry/delete/${id}`, {
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
                    {this.state.createActive ? <ChannelEntryCreate getChannelEntry={this.getChannelEntry} sessionToken={this.props.sessionToken}/> : <></> }
                    <ChannelEntryDisplay deleteChannelEntry={this.deleteChannelEntry} updateTrue={this.updateTrue} editUpdateChannelEntry={this.editUpdateChannelEntry} createTrue={this.createTrue} channelEntry={this.state.channelEntry} getChannelEntry={this.getChannelEntry} sessionToken={this.props.sessionToken}></ChannelEntryDisplay>
                </div>
            )
        }
}