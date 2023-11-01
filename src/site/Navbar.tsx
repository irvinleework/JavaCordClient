import React, {Component} from 'react';
import Auth from '../components/Auth/Auth';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'reactstrap';

type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
}

const Navigationbar = (props: AuthProps) => {
    return(
        <Navbar className="navigationBar">
            <Navbar.Brand>JavaCord</Navbar.Brand>
            <Button className="logButton" color="warning" outline onClick={props.clearLocalStorage}>Logout</Button> 
        </Navbar>
    )
}
export default Navigationbar