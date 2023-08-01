import React, {Component} from "react";
import Auth from "../Auth/Auth";
import APIURL from '../../helpers/environment'
import { withRouter, WithRouterProps } from '../../services/withRouter'
import { Params } from 'react-router-dom';

type AuthProps = {
    sessionToken: string | undefined | null
    // channel: any
}

type UserType = {
    userName: string
}
type FriendState = {
    user: UserType[]
}

class Friend extends Component<AuthProps & WithRouterProps, FriendState> {
    constructor(props: AuthProps & WithRouterProps) {
        super(props)
        this.state = {
            user: []
        }
    }
    getFriendList = () => {
        const { match } = this.props;
        console.log('getFriendList called')
        console.log(match.params.channelId)
        fetch(`${APIURL}/invited/${match.params.channelId}`, {
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
                user: data
            })
            console.log(this.state.user)
        })
        .catch(err => console.log(err))
    }
    componentDidMount = () => {
        this.getFriendList()
    }
    render() {
        return(
            <div>

            </div>
        )
    }      
}


export default withRouter(Friend)