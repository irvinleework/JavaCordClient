import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import {Form, Button, Label, Input} from "reactstrap"

type AuthProps = {
    sessionToken: string | undefined | null
    getChannel: () => void
}

type ChannelType = {
    name: string
}

export default class ChannelCreate extends Component<AuthProps, ChannelType> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            name: ""
        }
    }

    createChannel = (e: any) => {
        e.preventDefault();
        fetch(`${APIURL}/channel/create`, {
            method: "POST",
            body: JSON.stringify({
                channel: {
                    name: this.state.name
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
            this.setState({
                name: ""
            })
            this.props.getChannel();
        })
        .catch(err => console.log(err))
    }
    render() {
        return(
            <Form onSubmit={this.createChannel}>
                <Label htmlFor="name">Channel Name</Label>
                <Input className="ChannelInput" required name="name" type="text" value={this.state.name} placeholder="Create a Channel" onChange={(e) => this.setState({name: (e.target.value)})}></Input>
                <div id="button">
                    <Button className="createChannelButton" type="submit">Create</Button>
                </div>
            </Form>
        )
    }
}

