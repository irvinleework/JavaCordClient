import React from 'react';
import {Route, Link, Routes} from 'react-router-dom'
import {Row, Button, Col} from 'reactstrap';
import ChannelCreate from './ChannelCreate'
import ChannelEntry from '../ChannelEntry/ChannelEntry';
import ChannelEntryDisplay from '../ChannelEntry/ChannelEntryDisplay';
import Emitter from '../../services/Emitter'


type ChannelType = {
    name: string
    id: string
}

type AuthProps = {
    channel: ChannelType[]
    getChannel: () => void
    deleteChannel: (id: string) => void
    editUpdateChannel: (id: ChannelType) => void
    createTrue: () => void
    updateTrue: () => void
    sessionToken: string | undefined | null
    toggleModal: () => void
}



const ChannelDisplay = (props: AuthProps) => {
    return(
        <div className="sidebar">
            <div className="sidebar-list-styling">
                <h5>My Channels</h5>
                    <Row>
                        {props.channel.map((cprops: ChannelType, key) => {
                            return(
                                <>
                                <Col>
                                <div>
                                    <ul className="sidebar-list list-unstyled" key={key}>
                                        <li><Button onClick={() => {props.toggleModal(); console.log('button clicked')}}>{cprops.name}</Button></li>
                                    </ul>
                                </div>
                                <Button className="btn" type="button" outline onClick={() => {props.editUpdateChannel(cprops); props.updateTrue()}}>Edit Channel</Button>
                                <Button className="btn" type="button" outline onClick={() => {props.deleteChannel(cprops.id); props.updateTrue()}}>Delete Channel</Button>
                                </Col>
                                </>
                            )
                        })}
                        <ChannelCreate sessionToken={props.sessionToken} getChannel={props.getChannel}/>
                    </Row>
            </div>
        </div>
    )
}

export default ChannelDisplay