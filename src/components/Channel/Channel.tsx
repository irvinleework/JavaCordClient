import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import ChannelCreate from './ChannelCreate';
import ChannelDisplay from './ChannelDisplay';
import ChannelUpdate from './ChannelUpdate';

export interface ChannelType {
    name: string
    id: string
}

type AuthProps = {
    sessionToken: string | undefined | null
    toggleModal: () => void
}

type ChannelState = {
    channel: ChannelType[]
    updateActive: boolean
    createActive: boolean
    updatedChannel: ChannelType
}

export default class Channel extends Component<AuthProps, ChannelState> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            channel: [],
            updateActive: false,
            createActive: false,
            updatedChannel: {
                name: "",
                id: ""
            }
        }
    }

    getChannel = () => {
        console.log("get channel called")
        fetch(`${APIURL}/channel/mine`, {
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
                channel: data
            })
            console.log(this.state.channel, "channel called")
        })
        .catch(err => console.log(err))
    }

    componentDidMount = () => {
        this.getChannel()
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

    editUpdateChannel = (channelType: ChannelType) => {
        this.setState({updatedChannel: channelType})
    }

    deleteChannel = (id: string) => {
        const proceed = window.confirm("This will delete your Channel")

        if (proceed) {
            console.log("deleteChannel function called")
            console.log(id)

            fetch(`${APIURL}/channel/delete/${id}`, {
                method: "DELETE",
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": `${this.props.sessionToken}`
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.getChannel()
            })
            .catch(err => console.log(err))
        } else {
            console.log("Delete Cancelled")
        }
    }


    render(){
        return (
            <div>
                {this.state.updateActive ? <ChannelUpdate updatedChannel={this.state.updatedChannel} updateFalse={this.updateFalse} getChannel={this.getChannel} sessionToken={this.props.sessionToken}/> : <></>}
                {this.state.createActive ? <ChannelCreate getChannel={this.getChannel} sessionToken={this.props.sessionToken}/> : <></> }
                <ChannelDisplay deleteChannel={this.deleteChannel} updateTrue={this.updateTrue} editUpdateChannel={this.editUpdateChannel} createTrue={this.createTrue} channel={this.state.channel} getChannel={this.getChannel} sessionToken={this.props.sessionToken} toggleModal={this.props.toggleModal}></ChannelDisplay>
            </div>
        )
    }
}