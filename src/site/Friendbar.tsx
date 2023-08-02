import React, {Component} from "react"
import Friend from "../components/Friend/Friend"
import { ChannelType } from '../components/Interface/ChannelType';
import { Routes, Route } from "react-router-dom";

type AuthProps = {
    sessionToken: string | undefined | null
    channel: any
}

const Friendbar = (props: AuthProps) => {
    return(
        <div>
            <Routes>
                <Route path="/channelEntry/:channelId/" element={<Friend sessionToken={props.sessionToken} channel={props.channel}/>}/>
            </Routes>
        </div>
    )
}
export default Friendbar