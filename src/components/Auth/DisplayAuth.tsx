import React from 'react';
import {Button, Form, Row, Col, Container} from "reactstrap"
import { SizeProp, library } from '@fortawesome/fontawesome-svg-core'

// import your icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faCode } from '@fortawesome/free-solid-svg-icons'
type AuthProps = {
    email: string,
    password: string,
    userName: string,
    firstName: string,
    lastName: string,
    login: boolean,
    title: () => string,
    logSignButton: () => string,
    submitButton: () => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void,
    logToggle: (e: React.MouseEvent<HTMLButtonElement>) => void,
    signupFields: () => void
}

const DisplayAuth = (props: AuthProps) => {
    return(
        <div id="loginBackground">
            <Container className="loginContainer">
                <Row>
                    <div>
                        <h1 id="loginHeader">JAVACORD</h1>
                        <FontAwesomeIcon icon={faCode as IconProp} className="codeIcon" />
                    </div>
                    <div>
                        <Form className="login" onSubmit={props.handleSubmit}>
                            <h3>{props.title()}</h3>
                            {props.signupFields()}
                            <Button className="loginButton" onClick={props.logToggle}>{props.logSignButton()}</Button>
                            <Button className="loginButton" type="submit">{props.submitButton()} </Button>
                        </Form>
                    </div>
                </Row>
            </Container>
        </div>
    )
}

export default DisplayAuth;
