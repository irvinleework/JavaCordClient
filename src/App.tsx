import React, {Component} from 'react';
import Auth from './components/Auth/Auth';
import Home from './site/Home';
import {BrowserRouter as Router} from 'react-router-dom'

type TokenUpdateType = {
    sessionToken: string | undefined | null,
    createActive: boolean
}


export default class App extends Component<{}, TokenUpdateType> {
    constructor(props: TokenUpdateType) {
        super(props)
        this.state = {
            sessionToken: undefined,
            createActive: false
        }
        this.updateLocalStorage = this.updateLocalStorage.bind(this)
        this.toggleModal = this.toggleModal.bind(this)
    }

    componentDidMount = (() => {
        if(localStorage.getItem("token")) {
            this.setState({
                sessionToken: localStorage.getItem("token")
            })
        }
    })
    updateLocalStorage = (newToken: string) => {
        localStorage.setItem('token', newToken);
        this.setState({
            sessionToken: newToken
        })
    }

    clearLocalStorage = () => {
        localStorage.clear()
        this.setState({
            sessionToken: undefined
        })
    }

    toggleModal = () => {
        this.setState({createActive: !this.state.createActive})
    }
    

    viewConductor = () => {
        return this.state.sessionToken !== undefined ?
        <Home sessionToken={this.state.sessionToken} clearLocalStorage={this.clearLocalStorage} isOpen={this.state.createActive} toggleModal={this.toggleModal}/> :
        <Auth updateLocalStorage={this.updateLocalStorage} clearLocalStorage={this.clearLocalStorage}/>
    }

    render(){
        return(
            <div>
                <Router>
                    {this.viewConductor()}
                </Router>
            </div>
        )
    }
}
