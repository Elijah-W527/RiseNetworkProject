import React, {useState} from 'react';
import { Button, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext';
import { createPost } from './FirebaseFunctions';

const Create = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [updated, setUpdated] = useState(false)
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();

    function handleChange() {
        if (loading !== false)
            setLoading(false);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setError('');
        setSuccess('');
        if (/[^a-zA-Z0-9\s!?.,]/.test(e.target[0].value)) {
            setError("Please only enter letters")
            return false;
        }
        if (/[^a-zA-Z0-9\s!?.,]/.test(e.target[1].value)) {
            setError("Please only enter letters")
            return false;
        }
        setLoading(true);
        try {
            await createPost(currentUser.uid, e.target[0].value, e.target[1].value, e.target[2].files[0])
            setSuccess("Successfully updated")
            setUpdated(!updated);
            document.getElementById("create").reset();
        } catch (err) {
            console.log(err);
            setError("Failed to update account")
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className = "card mb-4">
            <div className = "card-body">
                <form id = "create" onChange = { handleChange } onSubmit = {handleSubmit}>
                { error && <Alert variant="danger">{error}</Alert> }
                { success && <Alert variant="success">{success}</Alert> }
                <div className="form-group">
                    <label className = "mr-2">Post Title (optional)</label>
                    <input type = "text" name = "title" pattern=".{1,100}" title="1 characters minimum"/>
                </div>
                <div className="form-group">
                    <label>Create a post</label>
                    <textarea styles = "padding-left: 5px;" name="description" type="text" className="form-control" minLength = "1" required></textarea>
                </div>
                <div className="form-group">
                    <label className = "mr-3">Post Media (optional)</label>
                    <input type = "file" accept = "image/png, image/jpeg" name = "images"/>                
                </div>
                    <Button disabled={loading} className="w-100" type ="submit">Create</Button>
                </form>
            </div>
        </div>

    );
}

export default Create;
