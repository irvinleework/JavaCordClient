import React from 'react';
import {Button, Form, Row, Col, Container} from "reactstrap"

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
            <Container id="loginContainer">
                <Row>
                    <Col>
                        <h1 id="loginHeader">JAVACORD</h1>
                        <i className="fas fa-code"></i>
                    </Col>
                    <Col>
                        <Form className="login" onSubmit={props.handleSubmit}>
                            <h3>{props.title()}</h3>
                            {props.signupFields()}
                            <Button className="loginButton" onClick={props.logToggle}>{props.logSignButton()}</Button>
                            <Button className="loginButton" type="submit">{props.submitButton()} </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default DisplayAuth;