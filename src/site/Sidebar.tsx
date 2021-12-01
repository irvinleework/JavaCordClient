import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {Button} from 'reactstrap'
import Channel from '../components/Channel/Channel'

type AuthProps = {
    sessionToken: string | undefined | null
}

const Sidebar = (props: AuthProps) => {
    return(
        <div>
            <Channel sessionToken={props.sessionToken}/>
        </div>


    )
}

export default Sidebar;