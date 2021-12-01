import React from 'react';
import Sidebar from './Sidebar';

type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
}

const Home = (props: AuthProps) => {
    return(
        <>
            <Sidebar sessionToken={props.sessionToken}/>
        </>
    )
}

export default Home;