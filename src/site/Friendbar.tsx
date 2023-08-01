import React, {Component} from "react"
import Friend from "../components/Friend/Friend"
type AuthProps = {
    sessionToken: string | undefined | null
}

const Friendbar = (props: AuthProps) => {
    return(
        <div>
            <Friend sessionToken={props.sessionToken}/>
        </div>
    )
}
export default Friendbar