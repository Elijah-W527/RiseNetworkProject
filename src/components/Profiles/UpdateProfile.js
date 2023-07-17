import React, { useRef, useState} from 'react'
import { Form, Button, Alert, Tab, Nav} from 'react-bootstrap'
import { useAuth } from '../../contexts/AuthContext';
import { Link} from 'react-router-dom'
import useDocs from '../../hooks/useDocs';

export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState('');
    const [pubError, setPubError] = useState('');
    const [success, setSuccess] = useState('');
    const [pubSuccess, setPubSuccess] = useState('');
    const { updateProfile } = useAuth();
    const [updated, setUpdated] = useState(false)
    const { docs } = useDocs('profiles', updated);

    const [loading, setLoading] = useState(true);
    const [pubLoading, setPubLoading] = useState(true)

    function handleChange() {
        setLoading(false)
    }

    function handlePubChange() {
        setPubLoading(false)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const promises = []
        setLoading(true);
        setError('');
        setSuccess('');

        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value));
        }
        Promise.all(promises).then(() => {
            setSuccess("Successful");
        }).catch(() => {
            setError('Failed to update account')
        }).finally(() => {
            setLoading(false);
        })
    }

    async function handlePublic(e) {
        e.preventDefault();
        setPubLoading(true);
        setPubError('');
        setPubSuccess('');
        try {
            await updateProfile(e.target[0].value, e.target[1].value, 
                e.target[2].files[0], e.target[3].files[0])
            document.getElementById("updatePublic").reset();
            setPubSuccess("Successfully updated")
            setUpdated(!updated);
            console.log(updated);
        } catch (err) {
            console.log(err);
            setPubError("Failed to update account")
        } finally {
            setPubLoading(false);
        }    
    }

    return (
        <div className = "container">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className = "row">
                    <div className = "col-3 mt-5">
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                            <Nav.Link eventKey="first">Public</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                            <Nav.Link eventKey="second">Personal</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </div>     
                    <div className = "col-sm-6 col-9 mt-5 pr-4">
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <h2 className = "text-center mb-4">Update Profile</h2>
                                { pubError && <Alert variant="danger">{pubError}</Alert> }
                                { pubSuccess && <Alert variant="success">{pubSuccess}
                                <Link className = "ml-2" to = {`/user/${docs.username}`}>View changes</Link> 
                                </Alert> 
                                
                                }
                                <Form id = "updatePublic" onChange = {handlePubChange} onSubmit = {handlePublic} >
                                    <Form.Group id = "name">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" defaultValue = { docs.name && docs.name }></Form.Control>
                                    </Form.Group>
                                    <Form.Group id = "bio">
                                        <Form.Label>Biography</Form.Label>
                                        <Form.Control type="text"defaultValue = { docs.bio && docs.bio }></Form.Control>
                                    </Form.Group>
                                    <Form.Group id = "picture" >
                                        <Form.Label>Profile picture</Form.Label>
                                        <Form.Control type="file"></Form.Control>
                                        { docs.img && <img className = "img-fluid w-75 mt-3" src = { docs.img } alt = "Profile" ></img> }
                                    </Form.Group>
                                    <Form.Group id = "header">
                                        <Form.Label>Profile Header</Form.Label>
                                        <Form.Control type="file"></Form.Control>
                                        { docs.header && <img className = "img-fluid w-75 mt-3" src = { docs.header } alt = "Banner" ></img> }
                                    </Form.Group>
                                    <Button disabled={pubLoading} className="w-100" type ="submit">Update</Button>
                                </Form>
                                
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <h2 className = "text-center mb-4">Update Personal</h2>
                            { error && <Alert variant="danger">{error}</Alert> }
                            { success && <Alert variant="success">{success}</Alert> }
                            <Form onChange = {handleChange} onSubmit = { handleSubmit }>
                                <Form.Group id = "email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref = {emailRef} required defaultValue = {currentUser.email} ></Form.Control>
                                </Form.Group>
                                <Form.Group id = "password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref = {passwordRef}  placeholder="Leave blank to keep the same" ></Form.Control>
                                </Form.Group>
                                <Form.Group id = "password-confirm">
                                    <Form.Label>Password Confirmation</Form.Label>
                                    <Form.Control type="password" ref = {passwordConfirmRef}  placeholder="Leave blank to keep the same"></Form.Control>
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type ="submit">Update</Button>
                            </Form>
                            </Tab.Pane>
                        </Tab.Content>
                    </div>
                </div>
            </Tab.Container>
        </div>
    )
}
