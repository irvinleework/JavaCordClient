import React, {Component} from 'react';
import DisplayAuth from "./DisplayAuth"
import APIURL from '../../helpers/environment'


type AuthState = {
    email: string,
    password: string,
    userName: string,
    firstName: string,
    lastName: string,
    login: boolean
}

type AuthProps = {
    updateLocalStorage: (newToken: string) => void
    clearLocalStorage: () => void
}

export default class Auth extends Component<AuthProps, AuthState> {
    constructor(props: AuthProps) {
        super(props)
        this.state = {
            email: "",
            password: "",
            userName: "",
            firstName: "",
            lastName: "",
            login: true
        }
    }

    logSignButton = () => {
        return !this.state.login ? 'Go Back To Sign In' : 'Sign Up'
    }
    title = () => {
        return !this.state.login ? 'Register A New User' : 'Sign In'
    }
    submitButton = () => {
        return !this.state.login ? 'Create User' : 'Login'
    }

    logToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        this.setState({
            email: "",
            password: "",
            userName: "",
            firstName: "",
            lastName: "",
            login: !this.state.login
        })
    }
    signupFields = () => !this.state.login ?
    (
        <div>
            <label htmlFor="email" className='loginTitle'>Email</label>
            <br/>
            <input className="loginInput" required type="email" id="email" placeholder="Enter Email" value={this.state.email} onChange={(e) => this.setState({email: (e.target.value)})} />
            <br/>
            <label htmlFor="password" className='loginTitle'>Password</label>
            <br/>
            <input className="loginInput" required type="password" id="password" placeholder="Enter Password" value={this.state.password} onChange={(e) => this.setState({password: (e.target.value)})} />
            <br/>
            <label htmlFor="userName" className='loginTitle'>Username</label>
            <br/>
            <input className="loginInput" required type="text" id="userName" placeholder="Enter Userame" value={this.state.userName} onChange={(e) => this.setState({userName: (e.target.value)})} />
            <br/>
            <label htmlFor="firstName" className='loginTitle'>First Name</label>
            <br/>
            <input className="loginInput" required type="text" id="firstName" placeholder="Enter First Name" value={this.state.firstName} onChange={(e) => this.setState({firstName: (e.target.value)})} />
            <br/>
            <label htmlFor="lastName" className='loginTitle'>Last Name</label>
            <br/>
            <input className="loginInput" required type="text" id="lastName" placeholder="Enter Last Name" value={this.state.lastName} onChange={(e) => this.setState({lastName: (e.target.value)})} />
        </div>
    ) : (
        <div>
            <label htmlFor="email" className='loginTitle'>Email</label>
            <br/>
            <input className="loginInput" required type="email" id="email" placeholder="Enter Email" value={this.state.email} onChange={(e) => this.setState({email: (e.target.value)})} />
            <br/>
            <label htmlFor="password" className='loginTitle'>Password</label>
            <br/>
            <input className="loginInput" required type="password" id="password" placeholder="Enter Password" value={this.state.password} onChange={(e) => this.setState({password: (e.target.value)})} />
        </div>
    )

    handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        
        let reqBody = this.state.login ?
        {
            user: {
                email: this.state.email,
                password: this.state.password
            }
        } : {
            user: {
                email: this.state.email,
                password: this.state.password,
                userName: this.state.userName,
                firstName: this.state.firstName,
                lastName: this.state.lastName
            }
        }

        let url = this.state.login ?
        `${APIURL}/user/login` :
        `${APIURL}/user/register`;

        fetch(url, {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: new Headers({
                'Content-Type': "application/json"
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            this.props.updateLocalStorage(json.sessionToken)

        }).catch(err => console.log(err))
    }


render() {
    return(
        <div>
            <DisplayAuth
                email={this.state.email}
                password={this.state.password}
                userName={this.state.userName}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                title={this.title}
                login={this.state.login}
                logSignButton={this.logSignButton}
                submitButton={this.submitButton}
                handleSubmit={this.handleSubmit}
                logToggle={this.logToggle}
                signupFields={this.signupFields}
             />
        </div>
    )
}
}