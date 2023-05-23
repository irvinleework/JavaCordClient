import React, {Component} from 'react';
import Auth from './Auth/Auth';
import Home from '../site/Home'
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from '../site/Sidebar';

type TokenUpdateType = {
    sessionToken: string | undefined | null,
    email: string,
    password: string,
    userName: string,
    firstName: string,
    lastName: string
}

export default class TokenUpdate extends Component<{}, TokenUpdateType> {
    constructor(props: TokenUpdateType) {
        super(props)
        this.state = {
            sessionToken: undefined,
            email: "",
            password: "",
            userName: "",
            firstName: "",
            lastName: ""
        }
        this.updateLocalStorage = this.updateLocalStorage.bind(this)
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

    viewConductor = () => {
        return this.state.sessionToken !== undefined ?
        <Home sessionToken={this.state.sessionToken} clearLocalStorage={this.clearLocalStorage}/> :
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