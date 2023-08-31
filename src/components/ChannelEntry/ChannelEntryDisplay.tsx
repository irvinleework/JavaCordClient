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
        width: "150vh",
        flexFlow: "column nowrap"
    },
    textBoxContainer: {
        display: "flex",
        border: "1px solid black",
        
    },
    listNoMargin: {
        margin: "3px"
    }
}

const ChannelEntryDisplay = (props: AuthProps) => {
    return(
        <div style={styles.container} className="entryBorder">
            
                {props.channelEntry.map((cprops: ChannelEntryType) => {
                    return(
                        <div style={styles.textBoxContainer} className='channelEntryText'>
                        <ul style={styles.listNoMargin} className="channelEntryList" key={cprops.channelEntryId}>
                            <li className="channelEntryUser">{cprops.user.userName}</li>
                            <li>{cprops.entry}</li>
                        </ul>
                        <Button className="button" type="button" outline onClick={() => {props.editUpdateChannelEntry(cprops); props.updateTrue()}}>Edit</Button>
                        <Button className="button" type="button" outline onClick={() => {props.deleteChannelEntry(cprops.channelEntryId)}}>Delete</Button>
                        </div>
                    )
                })}
            <div className='channelEntryInput'>
            <ChannelEntryCreate sessionToken={props.sessionToken} getChannelEntry={props.getChannelEntry} channel={props.channel}/>
            </div>
         </div>
    )
}

export default Radium(ChannelEntryDisplay) 