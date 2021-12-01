import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import {Modal, Form, ModalHeader, ModalBody, Label, Button, Input, FormGroup} from 'reactstrap'

type AuthProps = {
    sessionToken: string | undefined | null
    getChannel: () => void
    updatedChannel: ChannelType
    updateFalse: () => void
}

type ChannelType = {
    name: string
    id: string
}

export default class ChannelUpdate extends Component<AuthProps, ChannelType> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            name: this.props.updatedChannel.name,
            id: this.props.updatedChannel.id
        }
    }

    updateChannel = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetch(`${APIURL}/channel/update/${this.props.updatedChannel.id}`, {
            method: "PUT",
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
            this.props.getChannel()
            this.props.updateFalse()
        })
    }
    render() {
        return(
            <Modal isOpen={true}>
                <ModalHeader>Update Channel</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.updateChannel}>
                        <FormGroup>
                            <Label htmlFor="name">Channel Name</Label>
                            <Input className="ChannelInput" name="name" type="text" value={this.state.name} onChange={(e) => this.setState({name: (e.target.value)})} />
                        </FormGroup>
                        <div id="button">
                        <Button className="updateChannelButton" onClick={this.props.updateFalse}>Cancel</Button>
                        <Button className="updateChannelButton" type="submit">Update Channel</Button>
                        </div>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}