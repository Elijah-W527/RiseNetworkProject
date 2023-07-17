import React, { useState } from 'react'
import { Card, Button, Alert } from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'
import useDocs from '../../hooks/useDocs'

export default function Dashboard() {

    const [error, setError] = useState('');
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    const { docs } = useDocs('profiles');

    async function handleLogout() {
        setError('');
        try {
            await logout();
            history.push('/login')
        } catch {
            setError('Failed to log out');
        }
    };

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4">Dashboard</h2>
                    { error && <Alert variant="danger">{error}</Alert> }
                    <strong>Email:</strong> { currentUser.email }
                    <br></br>
                    <Link to={'user/' + docs.username} className="btn btn-primary w-100 mt-3">Your profile page</Link>
                    <Link to="/update-profile" className="btn btn-primary w-100 mt-3">Update Profile</Link>
                    <Link to="/home" className="btn btn-primary w-100 mt-3">Feed</Link>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                <Button variant="link" onClick = {handleLogout}>Log out</Button>
            </div>
        </>
    )
}
