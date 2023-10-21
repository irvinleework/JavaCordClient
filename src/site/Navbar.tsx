import React, {Component} from 'react';
import Auth from '../components/Auth/Auth';
import Navbar from 'react-bootstrap/Navbar';

type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
}

const Navigationbar = (props: AuthProps) => {
    return(
        <Navbar className="navigationBar" fixed="top">
            <Navbar.Brand>Brand link</Navbar.Brand>
        </Navbar>
    )
}
export default Navigationbar