import React from 'react';
import Sidebar from './Sidebar';
import {Button} from 'reactstrap'

type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
}

const Home = (props: AuthProps) => {
    return(
        <>
            <Sidebar sessionToken={props.sessionToken}/>
            <Button className="navButton" color="warning" outline onClick={props.clearLocalStorage}>Logout</Button>
        </>
    )
}

export default Home;