import React from 'react';
import {Route, Link, Routes, useParams} from 'react-router-dom'
import {List, Row, Button, Col} from 'reactstrap';
import ChannelCreate from './ChannelCreate'
import ChannelEntryDisplay from '../ChannelEntry/ChannelEntryDisplay';
import ChannelEntry from '../ChannelEntry/ChannelEntry'
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import { InvitedChannelType } from '../Interface/ChannelType';

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
    getInvitedChannel: () => void
    invitedChannel: InvitedChannelType[]
}



const ChannelDisplay = (props: AuthProps) => {
    return(
        <div className="sidebarContainer">
            <div className="sidebarWrapper">
                <div className="sidebarHeader">My Channels</div>
                    <div className="sidebarContent">              
                        {props.channel.map((cprops: ChannelType, index) => {
                            return(
                                <>
                                <Col>
                                <div>
                                <List type="unstyled" className="sidebarList" key={index}>
                                        <li><Link to={`/channelEntry/${cprops.channelId}`}><Button className='linkButton' onClick={() => {console.log('button clicked')}}>{cprops.name}</Button></Link></li>
                                    </List>
                            {props.invitedChannel.map((invitedChannel: InvitedChannelType) => {
                                return(
                                    
                                
                                        <>
                                {invitedChannel.channel.map((channel: ChannelType) => {
                                    return(
                                    <>
                                
                                   
                                <List type="unstyled" className="sidebarList" key={channel.channelId}>
                                        <li><Link to={`/channelEntry/${channel.channelId}`}><Button className='linkButton' onClick={() => {console.log('button clicked')}}>{channel.name}</Button></Link></li>
                                    </List>
                                    </>
                                    )  
                                })} 
                                <div className='iconPosition'>
                                    <div className="channelEditButton" onClick={() => {props.editUpdateChannel(cprops); props.updateTrue()}}><i className="fas fa-edit fa-lg"></i></div>
                                    <div className="channelDeleteButton" onClick={() => {props.deleteChannel(cprops.channelId);}}><i className="fa-solid fa-trash"></i></div>
                                </div>
                                
                                </>
                                )
                            })}    
                                    </div>
                                    </Col>
                                </>
                            )
                        })}
                        <ChannelCreate sessionToken={props.sessionToken} getChannel={props.getChannel}/>
                    </div>
                     
            </div>
            
        </div>
       
    )
}

export default ChannelDisplay