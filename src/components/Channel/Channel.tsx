import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import ChannelCreate from './ChannelCreate';
import ChannelDisplay from './ChannelDisplay';
import ChannelUpdate from './ChannelUpdate';
import {ChannelType} from '../Interface/ChannelType'

type AuthProps = {
    sessionToken: string | undefined | null
    getChannel: () => void
    deleteChannel: (channelId: string) => void
    channel: ChannelType[]
    getInvitedChannel: () => void
}

type ChannelState = {
    updateActive: boolean
    createActive: boolean
    updatedChannel: ChannelType
}

export default class Channel extends Component<AuthProps, ChannelState> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            updateActive: false,
            createActive: false,
            updatedChannel: {
                name: "",
                channelId: ""
            }
        }
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

    render(){
        return (
            <div>
                {this.state.updateActive ? <ChannelUpdate updatedChannel={this.state.updatedChannel} updateFalse={this.updateFalse} getChannel={this.props.getChannel} sessionToken={this.props.sessionToken}/> : <></>}
                {this.state.createActive ? <ChannelCreate getChannel={this.props.getChannel} sessionToken={this.props.sessionToken}/> : <></> }
                <ChannelDisplay deleteChannel={this.props.deleteChannel} updateTrue={this.updateTrue} editUpdateChannel={this.editUpdateChannel} createTrue={this.createTrue} channel={this.props.channel} getChannel={this.props.getChannel} getInvitedChannel={this.props.getInvitedChannel} sessionToken={this.props.sessionToken}></ChannelDisplay>
            </div>
        )
    }
}