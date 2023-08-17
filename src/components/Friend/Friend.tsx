import React, {Component} from "react";
import Auth from "../Auth/Auth";
import {ChannelType} from "../Interface/ChannelType"
import APIURL from '../../helpers/environment'
import { withRouter, WithRouterProps } from '../../services/withRouter'
import { Params } from 'react-router-dom';
import FriendDisplay from "./FriendDisplay";

interface AuthProps {
    sessionToken: string | undefined | null
    channel: ChannelType[]
}

interface UserType {
    userName: string
    User?: any
}
interface FriendState {
    friend: UserType[]
}

class Friend extends Component<AuthProps & WithRouterProps, FriendState> {
    constructor(props: AuthProps & WithRouterProps) {
        super(props)
        this.state = {
            friend: []
        }
    }
    getFriendList = () => {
        const { match } = this.props;
        console.log('getFriendList called')
        console.log(match.params.channelId)
        fetch(`${APIURL}/channel/invited/${match.params.channelId}`, {
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
                friend: data.User
            })
            console.log(this.state.friend)
            console.log(this.state.friend)
        })
        .catch(err => console.log(err))
    }
    componentDidMount = () => {
        this.getFriendList()
    }
    componentDidUpdate(prevProps: Readonly<AuthProps & WithRouterProps<Readonly<Params<string>>>>, prevState: Readonly<FriendState>, snapshot?: any): void {
        const { match } = this.props;
        if (match.params.channelId !== prevProps.match.params.channelId) {
            this.getFriendList()
        }
    }
    render() {
        return(
            <div>
                <FriendDisplay sessionToken={this.props.sessionToken} channel={this.props.channel} friend={this.state.friend} getFriendList={this.getFriendList}/>
            </div>
        )
    }      
}


export default withRouter(Friend)