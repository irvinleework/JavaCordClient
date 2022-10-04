import React from 'react';
import {Modal, Button} from "reactstrap"
import ChannelEntry from '../ChannelEntry/ChannelEntry'

type AuthProps = {
    sessionToken: string | undefined | null,
    isOpen: boolean
    toggleModal: () => void
}

const ChannelEntryModalDisplay = (props: AuthProps) => {

    return(
        <div>
            <Modal isOpen={props.isOpen}>
            <ChannelEntry sessionToken={props.sessionToken}/>
            <Button className='button' type='button' outline onClick={props.toggleModal}>close</Button>
            </Modal>
        </div>
    )
}
export default ChannelEntryModalDisplay