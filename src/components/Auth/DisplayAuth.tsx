import React from 'react';
import {Button, Form, Row, Col, Container} from "reactstrap"
import { SizeProp, library } from '@fortawesome/fontawesome-svg-core'
import { TypeAnimation } from 'react-type-animation';

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
                    <TypeAnimation className="typeAnimation"
                    sequence={[
                        "</>",
                        1000,
                        "<KavaCord/>",
                        1500,
                        "<JavaVord/>",
                        1500,
                        "<JavaCOrd/>",
                        1500,
                        "<JavaCord/>"
                    ]}
                    wrapper="span"
                    speed={1}
                    repeat={0}
                    deletionSpeed={3}
                    style={{ fontSize: '7em'}}
                    cursor={false}
                    />
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
