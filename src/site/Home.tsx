import React, {Component} from 'react';
import Sidebar from './Sidebar';
import {Button} from 'reactstrap'
import {Router, Route, Routes} from 'react-router-dom'
import { ChannelType } from '../components/Interface/ChannelType';
import Navbar from './Navbar';
import Friendbar from './Friendbar'
import APIURL from '../helpers/environment'

type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
}
type ChannelState = {
    channel: ChannelType[]
}
export default class Home extends Component<AuthProps, ChannelState> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            channel: []
            }
        }
        getChannel = () => {
            console.log("get channel called")
            fetch(`${APIURL}/channel/mine`, {
                method: "GET",
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization": `${this.props.sessionToken}`
                })
            })
            .then(response => response.json())
            .then(data => {
                console.log(data)
                this.setState({
                    channel: data
                })
                console.log(this.state.channel, "channel called")
            })
            .catch(err => console.log(err))
        }

componentDidMount = () => {
    this.getChannel()
}
deleteChannel = (channelId: string) => {
    const proceed = window.confirm("This will delete your Channel")

    if (proceed) {
        console.log("deleteChannel function called")
        fetch(`${APIURL}/channel/delete/${channelId}`, {
            method: "DELETE",
            headers: new Headers({
                "Content-Type": "application/json",
                "Authorization": `${this.props.sessionToken}`
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.getChannel()
        })
        .catch(err => console.log(err))
    } else {
        console.log("Delete Cancelled")
    }
}
render() {
    return(
        <div className='homeContainer'>
            <Navbar sessionToken={this.props.sessionToken} clearLocalStorage={this.props.clearLocalStorage}/>
            <Sidebar sessionToken={this.props.sessionToken} getChannel={this.getChannel} deleteChannel={this.deleteChannel} channel={this.state.channel} clearLocalStorage={this.props.clearLocalStorage}/>
            <Friendbar sessionToken={this.props.sessionToken} channel={this.state.channel}/>
        </div>
    )
}
}
// const Home = (props: AuthProps) => {
//     return(
//         <div className='homeContainer'>
//             <Navbar sessionToken={props.sessionToken} clearLocalStorage={props.clearLocalStorage}/>
//             <Sidebar sessionToken={props.sessionToken} clearLocalStorage={props.clearLocalStorage}/>
//             <Friendbar sessionToken={props.sessionToken}/>
//         </div>

//     )
// }

// export default Home;