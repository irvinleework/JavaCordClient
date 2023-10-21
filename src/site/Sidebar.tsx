import React, {Component} from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import Channel from '../components/Channel/Channel'
import ChannelEntry from '../components/ChannelEntry/ChannelEntry'
import { ChannelType } from '../components/Interface/ChannelType';
import Home from './Home'
import APIURL from '../helpers/environment'
import Radium from 'radium'
type AuthProps = {
    sessionToken: string | undefined | null
    clearLocalStorage: () => void
    getChannel: () => void
    deleteChannel: (channelId: string) => void
    channel: ChannelType[]
}


const Sidebar = (props: AuthProps) => {
    return(
        <div className="sidebar">
            <div>
                <Channel sessionToken={props.sessionToken} getChannel={props.getChannel} deleteChannel={props.deleteChannel} channel={props.channel} clearLocalStorage={props.clearLocalStorage}/>
            </div>
            <Routes>
//                 <Route path="/channelEntry/:channelId" element={<ChannelEntry sessionToken={props.sessionToken} channel={props.channel}/>}/> 
//         </Routes>
        </div>

    )
}
export default Radium(Sidebar)
// export default class Sidebar extends Component<AuthProps, ChannelState> {
//     constructor(props: AuthProps) {
//         super(props)
//         this.state = {
//             channel: []
//             }
//         }
//         getChannel = () => {
//             console.log("get channel called")
//             fetch(`${APIURL}/channel/mine`, {
//                 method: "GET",
//                 headers: new Headers({
//                     "Content-Type": "application/json",
//                     "Authorization": `${this.props.sessionToken}`
//                 })
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 this.setState({
//                     channel: data
//                 })
//                 console.log(this.state.channel, "channel called")
//             })
//             .catch(err => console.log(err))
//         }
        
//         componentDidMount = () => {
//             this.getChannel()
//         }
        
//         deleteChannel = (channelId: string) => {
//             const proceed = window.confirm("This will delete your Channel")
    
//             if (proceed) {
//                 console.log("deleteChannel function called")
//                 fetch(`${APIURL}/channel/delete/${channelId}`, {
//                     method: "DELETE",
//                     headers: new Headers({
//                         "Content-Type": "application/json",
//                         "Authorization": `${this.props.sessionToken}`
//                     })
//                 })
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log(data)
//                     this.getChannel()
//                 })
//                 .catch(err => console.log(err))
//             } else {
//                 console.log("Delete Cancelled")
//             }
//         }
//     render(){
        
//         return(
//         <div>
//             <div>
//                 <Channel sessionToken={this.props.sessionToken} getChannel={this.getChannel} deleteChannel={this.deleteChannel} channel={this.state.channel} clearLocalStorage={this.props.clearLocalStorage}/>
//             </div>
//         <Routes>
//                 <Route path="/channelEntry/:channelId" element={<ChannelEntry sessionToken={this.props.sessionToken} channel={this.state.channel}/>}/> 
//         </Routes>
//         </div>

//     )
// }
// }
