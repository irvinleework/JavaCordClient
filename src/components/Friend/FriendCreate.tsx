import React, { Component } from "react"
import APIURL from '../../helpers/environment';
import { withRouter, WithRouterProps } from '../../services/withRouter'
import {Form, Input, Button} from "reactstrap"

type AuthProps = {
    sessionToken: string | undefined | null
    getFriendList: () => void
}
interface UserType {
    userName: string
    User?: any
}

class FriendCreate extends Component<AuthProps & WithRouterProps, UserType> {
    constructor(props: AuthProps & WithRouterProps) {
        super(props)
        this.state = {
            userName: ""
        }
    }
    addFriendList = () => {
        const {match} = this.props;
        fetch(`${APIURL}/channel/adduser/${match.params.channelId}`, {
            method: "POST",
            body: JSON.stringify({
                user: {
                    userName: this.state.userName
                }
            }),
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.props.getFriendList()
        })
        .catch(err => console.log(err))
        }
        render() {
            return(
                <Form onSubmit={this.addFriendList}>
                    <Input className="addFriendInput" required type="text" placeholder="Message" value={this.state.userName} onChange={(e) => this.setState({userName: (e.target.value)})}></Input>
                    <Button className="createFriendButton" type="submit">Create</Button>
                </Form>
            )
        }
    }

export default withRouter(FriendCreate)
