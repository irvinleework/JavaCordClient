import React from 'react';
import Sidebar from './Sidebar';
import {Button} from 'reactstrap'
// import ChannelEntryModal from '../components/ChannelEntryModal/ChannelEntryModal'
import Channel from '../components/Channel/Channel';
import ChannelEntryModalDisplay from '../components/ChannelEntryModal/ChannelEntryModalDisplay'

type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
    isOpen: boolean
    toggleModal: () => void
}

const Home = (props: AuthProps) => {
    return(
        <>
            <Sidebar sessionToken={props.sessionToken} toggleModal={props.toggleModal}/>
            {/* <ChannelEntryModal sessionToken={props.sessionToken}/> */}
            <ChannelEntryModalDisplay  sessionToken={props.sessionToken} isOpen={props.isOpen} toggleModal={props.toggleModal}/>
            <Button className="navButton" color="warning" outline onClick={props.clearLocalStorage}>Logout</Button>
        </>
    )
}

export default Home;