import React from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom'
import {Row, Button, Col} from 'reactstrap';
import ChannelCreate from './ChannelCreate'
import ChannelEntryDisplay from '../ChannelEntry/ChannelEntryDisplay';
import ChannelEntry from '../ChannelEntry/ChannelEntry'
const cdbreact = require('cdbreact');
const {
    CDBSidebar,
    CDBSidebarContent,
    CDBSidebarFooter,
    CDBSidebarHeader,
    CDBSidebarMenu,
    CDBSidebarMenuItem,
  } = cdbreact;
type ChannelType = {
    name?: string
    channelId: string
}

type AuthProps = {
    channel: ChannelType[]
    getChannel: () => void
    deleteChannel: (channelId: string) => void
    editUpdateChannel: (channelId: ChannelType) => void
    createTrue: () => void
    updateTrue: () => void
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
}



const ChannelDisplay = (props: AuthProps) => {
    return(
        <div className="sidebar">
            <CDBSidebar className="sidebar-list-styling" textColor="#fff" backgroundColor="#333">
                <CDBSidebarHeader>My Channels</CDBSidebarHeader>
                    <CDBSidebarContent className="sidebar-content">              
                        {props.channel.map((cprops: ChannelType) => {
                            return(
                                <>
                                <Col>
                                <div>
                                    <ul className="sidebar-list list-unstyled" key={cprops.channelId}>
                                        <li><Link to={`/channelEntry/${cprops.channelId}`}><Button className='linkButton' onClick={() => {console.log('button clicked')}}>{cprops.name}</Button></Link></li>
                                    </ul>
                                </div>
                                <div className='iconPosition'>
                                    <div className="channelEditButton" onClick={() => {props.editUpdateChannel(cprops); props.updateTrue()}}><i className="fas fa-edit fa-lg"></i></div>
                                    <div className="channelDeleteButton" onClick={() => {props.deleteChannel(cprops.channelId);}}><i className="fas fa-trash fa-lg"></i></div>
                                </div>
                                </Col>
                                </>
                            )
                        })}
                        <ChannelCreate sessionToken={props.sessionToken} getChannel={props.getChannel}/>
                    </CDBSidebarContent>
                    <Button className="navButton" color="warning" outline onClick={props.clearLocalStorage}>Logout</Button> 
            </CDBSidebar>
        </div>
    )
}

export default ChannelDisplay