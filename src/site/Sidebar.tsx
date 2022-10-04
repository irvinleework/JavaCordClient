import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Channel from '../components/Channel/Channel'
import ChannelEntry from '../components/ChannelEntry/ChannelEntry'

type AuthProps = {
    sessionToken: string | undefined | null
    toggleModal: () => void
}

const Sidebar = (props: AuthProps) => {
    return(
        <div>
            <Channel sessionToken={props.sessionToken} toggleModal={props.toggleModal}/>
        </div>


    )
}

export default Sidebar;