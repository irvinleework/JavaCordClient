import React, {Component} from 'react';
import Auth from '../components/Auth/Auth';

type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
}

const Navbar = (props: AuthProps) => {
    return(
        <div>
            
        </div>
    )
}
export default Navbar;