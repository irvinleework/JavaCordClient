import React from 'react';
import {Row, Button} from 'reactstrap'
import ChannelEntryCreate from './ChannelEntryCreate';

type ChannelEntryType = {
    entry: string
    id: string
}

type AuthProps = {
    channelEntry: ChannelEntryType[]
    getChannelEntry: () => void
    deleteChannelEntry: (id: string) => void
    editUpdateChannelEntry: (id: ChannelEntryType) => void
    createTrue: () => void
    updateTrue: () => void
    sessionToken: string | undefined | null
}

const ChannelEntryDisplay = (props: AuthProps) => {
    return(
        <div className="entry border">
            <Row>
                {props.channelEntry.map((cprops: ChannelEntryType, key) => {
                    return(
                        <>
                        <div className="Channel Entry" key={key}>
                            {cprops.entry}
                        </div>
                        <Button className="button" type="button" outline onClick={() => {props.editUpdateChannelEntry(cprops); props.updateTrue()}}>Edit</Button>
                        <Button className="button" type="button" outline onClick={() => {props.deleteChannelEntry(cprops.id); props.createTrue()}}>Delete</Button>
                        </>
                    )
                })}
                <ChannelEntryCreate sessionToken={props.sessionToken} getChannelEntry={props.getChannelEntry}/>
            </Row>
        </div>
        
    )
}

export default ChannelEntryDisplay 