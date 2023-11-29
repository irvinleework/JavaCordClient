import React, {Component} from 'react';
import Sidebar from './Sidebar';
import {Button} from 'reactstrap'
import {Router, Route, Routes} from 'react-router-dom'
import { ChannelType, InvitedChannelType } from '../components/Interface/ChannelType';
import Navigationbar from './Navbar';
import Friendbar from './Friendbar'
import APIURL from '../helpers/environment'
import Channel from '../components/Channel/Channel'
import ChannelEntry from '../components/ChannelEntry/ChannelEntry';
type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
}
type ChannelState = {
    channel: ChannelType[]
    invitedChannel: InvitedChannelType[]
}
export default class Home extends Component<AuthProps, ChannelState> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            channel: [],
            invitedChannel: []
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
     
        // getInvitedChannel = () => {
        //     console.log("getinvitedchannel called")
        //     fetch(`${APIURL}/user/invitedchannels`, {
        //         method: "GET",
        //         headers: new Headers({
        //             "Content-Type": "application/json",
        //             "Authorization": `${this.props.sessionToken}`
        //         })
        //     })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //         this.setState({
        //             invitedChannel: data
        //         })
        //         console.log(this.state.invitedChannel, "invited channel called")
        //     })
        //     .catch(err => console.log(err))
        // }
        getInvitedChannel = () => {
            console.log('getInvitedChannel called');
          
            fetch(`${APIURL}/user/invitedchannels`, {
              method: 'GET',
              headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `${this.props.sessionToken}`,
              }),
            })
              .then((response) => response.json())
              .then((data: InvitedChannelType[]) => {
                console.log(data);
                this.setState({
                  invitedChannel: data,
                });
                console.log(this.state.invitedChannel, 'invited channel called');
              })
              .catch((err) => console.log(err));
          };
        componentDidMount = () => {
            this.getChannel();
            this.getInvitedChannel()
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
            <Navigationbar sessionToken={this.props.sessionToken} clearLocalStorage={this.props.clearLocalStorage}/>
        
            <Sidebar sessionToken={this.props.sessionToken} getChannel={this.getChannel} getInvitedChannel={this.getInvitedChannel} deleteChannel={this.deleteChannel} channel={this.state.channel} invitedChannel={this.state.invitedChannel} clearLocalStorage={this.props.clearLocalStorage}/>
            <Routes>
                <Route path="/channelEntry/:channelId" element={<ChannelEntry sessionToken={this.props.sessionToken} channel={this.state.channel}/>}/> 
         </Routes>
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