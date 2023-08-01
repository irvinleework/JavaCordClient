import React from 'react';
import Sidebar from './Sidebar';
import {Button} from 'reactstrap'
import {Router, Route, Routes} from 'react-router-dom'
import { ChannelType } from '../components/Interface/ChannelType';
import Navbar from './Navbar';
import Friendbar from './Friendbar'

type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
}

const Home = (props: AuthProps) => {
    return(
        <div className='homeContainer'>
            <Navbar sessionToken={props.sessionToken} clearLocalStorage={props.clearLocalStorage}/>
            <Sidebar sessionToken={props.sessionToken} clearLocalStorage={props.clearLocalStorage}/>
            <Friendbar sessionToken={props.sessionToken}/>
        </div>

    )
}

export default Home;