import React from 'react';
import {Row, Button} from 'reactstrap'
import ChannelEntryCreate from './ChannelEntryCreate';
import Radium from 'radium'

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
const styles = {
    container: {
        display: "flex",
        border: "1px solid black",
        height: "100vh",
        width: "100vh",
        flexFlow: "column nowrap"
    }
}

const ChannelEntryDisplay = (props: AuthProps) => {
    return(
        <div style={styles.container} className="entryBorder">
            
                {props.channelEntry.map((cprops: ChannelEntryType) => {
                    return(
                        <>
                        <div className='channelEntryText'>

                        <ul className="channelEntryList" key={cprops.channelEntryId}>
                            <li className="channelEntryUser">{cprops.user.userName}</li>
                            <li>{cprops.entry}</li>
                        </ul>
                        </div>

                        <Button className="button" type="button" outline onClick={() => {props.editUpdateChannelEntry(cprops); props.updateTrue()}}>Edit</Button>
                        <Button className="button" type="button" outline onClick={() => {props.deleteChannelEntry(cprops.channelEntryId)}}>Delete</Button>
                        </>
                    )
                })}
            <div className='channelEntryInput'>
            <ChannelEntryCreate sessionToken={props.sessionToken} getChannelEntry={props.getChannelEntry} channel={props.channel}/>
            </div>
         </div>
    )
}

export default Radium(ChannelEntryDisplay) 