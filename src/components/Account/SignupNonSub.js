import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { projectFirestore } from "../../firebase"
import jsonp from 'jsonp';
import queryString from 'query-string';


export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const usernameRef = useRef();
    const { signup, login } = useAuth();
    const [error, setError] = useState('');
    const history = useHistory();
    const [loading, setLoading] = useState(false);



    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError("Password do not match");
        }
        const doc = await projectFirestore.collection('usernames').doc(usernameRef.current.value).get();
        if (doc.exists) {
            return setError("Username taken");
        }
        try {
            setError('');
            setLoading(true);
            // const formData = {
            //   EMAIL: emailRef.current.value
            // };
            // jsonp(`https://risenetwork.us17.list-manage.com/subscribe/post-json?u=8fccf4ff2ef677f4461fb2cf6&amp;id=fa86553921&${queryString.stringify(formData)}`, { param: 'c' }, (err, data) => {
            //   console.log('err:', err);
            //   console.log('data:', data);
            // });
            await signup(emailRef.current.value, passwordRef.current.value, usernameRef.current.value);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/bookstorepay');
        } catch {
            setError("Failed to create an account");
        }
        setLoading(false);
    }

    return (
        <>
        <div className = "container">
        <Card>
                <Card.Body>
                    <h2 className = "text-center mb-4">Sign up</h2>
                    { error && <Alert variant="danger">{error}</Alert> }
                    <Form onSubmit = { handleSubmit }>
                    <Form.Group id = "username">
                            <Form.Label>Username</Form.Label>
                            <Form.Control pattern = "^[a-zA-Z0-9]+" ref = {usernameRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id = "email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref = {emailRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id = "password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref = {passwordRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id = "password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref = {passwordConfirmRef} required ></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type ="submit">Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            </div>
            <div className="row no-gutters pt-4 ">
            </div>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Login</Link>
            </div>
            <div className="row no-gutters pt-4 ">
            </div>
            
        </>
    )
}
