import React, {Component} from "react";
import ChannelEntryModalDisplay from './ChannelEntryModalDisplay'
import Emitter from '../../services/Emitter'
// type AuthProps = {
//     sessionToken: string | undefined | null
// }

// type ModalState = {
//     createActive : boolean
// }


// export default class ChannelEntryModal extends Component<AuthProps, ModalState> {
//     constructor(props: AuthProps) {
//         super(props)
//         this.state = {
//             createActive: false
//         }
//     }
//     openModal = () => {
//         this.setState({createActive: true})
//     }
//     closeModal = () => {
//         this.setState({createActive: false})
//     }
//     componentDidMount() {
//         Emitter.on('toggle-modal', this.openModal)
//     }
//     componentWillUnmount() {
//         Emitter.off('toggle-modal', this.openModal)
//     }
//     render() {
//     // React.useEffect(() => {
//     //     eventEmitter.addListener('toggle-modal', this.openModal)
//     //     return() => {
//     //         eventEmitter.removeListener('toggle-modal', this.openModal)
//     //     }
//     // })
//         return(
//             <div>
//                 <ChannelEntryModalDisplay openModal={this.openModal} closeModal={this.closeModal} sessionToken={this.props.sessionToken}></ChannelEntryModalDisplay>
//             </div>
//         )
//     }
// }