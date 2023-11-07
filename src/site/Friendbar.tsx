import React, {Component} from "react"
import Friend from "../components/Friend/Friend"
import { ChannelType } from '../components/Interface/ChannelType';


type AuthProps = {
    sessionToken: string | undefined | null
    channel: any
}

const Friendbar = (props: AuthProps) => {
    return(
        <div className="friendBarWrapper">
            
                <Friend sessionToken={props.sessionToken} channel={props.channel}/>
            
        </div>
    )
}
export default Friendbar