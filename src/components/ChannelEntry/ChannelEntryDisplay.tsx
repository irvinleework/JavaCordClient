import React from 'react';
import {Row, Button} from 'reactstrap'
import ChannelEntryCreate from './ChannelEntryCreate';


type ChannelEntryType = {
    entry: string
    channelEntryId: string
    user?: any
    userName?: string
}

type AuthProps = {
    channelEntry: ChannelEntryType[]
    getChannelEntry: () => void
    deleteChannelEntry: (channelEntryId: string) => void
    editUpdateChannelEntry: (channelEntryId: ChannelEntryType) => void
    updateTrue: () => void
    sessionToken: string | undefined | null
    channel: any
}


const ChannelEntryDisplay = (props: AuthProps) => {
    return(
            <div className='entryBorderWrapper'>
        <div  className="entryBorder">
            
                {props.channelEntry.map((cprops: ChannelEntryType) => {
                    return(
                        
                        <div className='channelEntryText'>
                        <ul className="channelEntryList" key={cprops.channelEntryId}>
                            <li className="channelEntryUser">{cprops.user.userName}</li>
                            <li>{cprops.entry}</li>
                        </ul>
                        <Button className="button" type="button" outline onClick={() => {props.editUpdateChannelEntry(cprops); props.updateTrue()}}>Edit</Button>
                        <Button className="button" type="button" outline onClick={() => {props.deleteChannelEntry(cprops.channelEntryId)}}>Delete</Button>
                        </div>
                        
                    )
                })}
            </div>
            <div className='channelEntryInput'>
            <ChannelEntryCreate sessionToken={props.sessionToken} getChannelEntry={props.getChannelEntry} channel={props.channel}/>
            </div>
            </div>
    )
}

export default (ChannelEntryDisplay) 