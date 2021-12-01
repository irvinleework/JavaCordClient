import React, {Component} from 'react';
import APIURL from '../../helpers/environment';
import {Modal, Form, ModalHeader, ModalBody, Label, Button, Input, FormGroup} from 'reactstrap'

type AuthProps = {
    sessionToken: string | undefined | null
    getChannelEntry: () => void
    updatedChannelEntry: ChannelEntryType
    updateFalse: () => void
}
type ChannelEntryType = {
    entry: string
    id: string
}

export default class ChannelEntryUpdate extends Component<AuthProps, ChannelEntryType> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            entry: this.props.updatedChannelEntry.entry,
            id: this.props.updatedChannelEntry.id
        }
    }
    updateChannelEntry = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        fetch(`${APIURL}/channelentry/update/${this.props.updatedChannelEntry.id}`, {
            method: "PUT",
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
            this.props.getChannelEntry()
            this.props.updateFalse()
        })
    }
    render(){
        return(
            <Modal isOpen={true}>
                <ModalHeader>Edit Entry</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.updateChannelEntry}>
                        <FormGroup>
                            <Input className="ChannelEntryInput" name="name" type="text" value={this.state.entry} onChange={(e) => this.setState({entry: (e.target.value)})}/>
                        </FormGroup>
                        <Button className="updateChannelEntryButton" onClick={this.props.updateFalse}>Cancel</Button>
                        <Button className="updateChannelEntryButton" type="submit">Edit Entry</Button>
                    </Form>
                </ModalBody>
            </Modal>
        )
    }
}