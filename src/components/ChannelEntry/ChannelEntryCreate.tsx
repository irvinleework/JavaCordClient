import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import {Form, Input, Button} from "reactstrap"

type AuthProps = {
    sessionToken: string | undefined | null
    getChannelEntry: () => void
}
type ChannelEntryType = {
    entry: string
}
export default class ChannelEntryCreate extends Component<AuthProps, ChannelEntryType> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            entry: ""
        }
    }
    createChannelEntry = (e: any) => {
        e.preventDefault()
        fetch(`${APIURL}/channelentry/create`, {
            method: "POST",
            body: JSON.stringify({
                channelentry: {
                    entry: this.state.entry
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
            this.setState ({
                entry: ""
            })
            this.props.getChannelEntry()
        })
        .catch(err => console.log(err))
    }
    render(){
        return(
            <Form onSubmit={this.createChannelEntry}>
                <Input className="ChannelEntryInput" required type="text" value={this.state.entry} onChange={(e) => this.setState({entry: (e.target.value)})}></Input>
                <div id="button">
                    <Button className="createChannelEntry" type="submit">Enter</Button>
                </div>
            </Form>
        )
    }
}