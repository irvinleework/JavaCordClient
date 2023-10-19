import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import {Form, Input, Button, Row} from "reactstrap"
import { withRouter, WithRouterProps } from '../../services/withRouter'

type AuthProps = {
    sessionToken: string | undefined | null
    getChannelEntry: () => void
    channel: any
}
type ChannelEntryType = {
    entry: string
}
class ChannelEntryCreate extends Component<AuthProps & WithRouterProps, ChannelEntryType> {
    constructor(props: AuthProps & WithRouterProps) {
        super(props)
        this.state = {
            entry: ""
        }
    }
    createChannelEntry = (e: any) => {
        // e.preventDefault()
        const { match } = this.props;
        fetch(`${APIURL}/channel/${match.params.channelId}/channelentry/create`, {
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
            <Form className='inputWrapper' onSubmit={this.createChannelEntry}>
                
                
                        <Input className="channelEntryInputBox" required type="text" placeholder="Message" value={this.state.entry} onChange={(e) => this.setState({entry: (e.target.value)})}></Input>
                    
                        {/* <Button className="createChannelEntry" type="submit">Enter</Button> */}
                    
                    
                
            </Form>
        )
    }
}
export default withRouter(ChannelEntryCreate)