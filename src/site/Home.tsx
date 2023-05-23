import React from 'react';
import Sidebar from './Sidebar';
import {Button} from 'reactstrap'
import {Router, Route, Routes} from 'react-router-dom'
import { ChannelType } from '../components/Interface/ChannelType';


type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
}

const Home = (props: AuthProps) => {
    return(
        <div className='homeContainer'>
            
            <Sidebar sessionToken={props.sessionToken} clearLocalStorage={props.clearLocalStorage}/>
        </div>

    )
}

export default Home;