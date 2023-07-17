import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../../firebase'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('');
            setLoading(true);
            await login(emailRef.current.value, passwordRef.current.value);
            history.push('/bookstorepay');
        } catch {
            setError("Failed to Log in");
        }

        setLoading(false);

    }

    return (
        <>
        <div className = "container"> 
            {auth.currentUser && history.push('/bookstorepay')}
            <Card>
                <Card.Body>
                    <h2 className = "text-center mb-4">Log in</h2>
                    { error && <Alert variant="danger">{error}</Alert> }
                    <Form onSubmit = { handleSubmit }>
                        <Form.Group id = "email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref = {emailRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id = "password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref = {passwordRef} required ></Form.Control>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type ="submit">Login</Button>
                    </Form>
                    <div className="w-100 text-center mt-3">
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </div>

                </Card.Body>
            </Card>
            <div className="row no-gutters pt-4 ">
            </div>
            <div className="w-100 text-center mt-2">
                Need an account? <Link to="/signup">Sign up</Link>
            </div>
            <div className="row no-gutters pt-4 ">
            </div>
            </div>
        </>
    )
}
