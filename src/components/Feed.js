import React, {useState} from 'react';
import useAllPosts from '../hooks/usePostsListener';
import { useAuth } from '../contexts/AuthContext';
import { Form } from 'react-bootstrap'
import Posts from './Profiles/Posts'
import { Link, useHistory } from 'react-router-dom'
import { createPost, createComment } from './FirebaseFunctions';
import Create from './Create';

const Feed = () => {

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [updated, setUpdated] = useState(false)
    const [loading, setLoading] = useState(true);
    const { allPosts } = useAllPosts(updated);
    const history = useHistory();
    const { currentUser } = useAuth();

    function handleChange() {
        if (loading !== false)
            setLoading(false);
    }

    const handleSubmit = (type, id) => async e => {
        e.preventDefault();
        setError('');
        setSuccess('');
        // if ((/[^a-zA-Z0-9\s!?.,]/.test(e.target[0].value))) {
        //     setError("Please only enter letters")
        //     return false;
        // }
        // if ((/[^a-zA-Z0-9\s!?.,]/.test(e.target[1].value))) {
        //     setError("Please only enter letters")
        //     return false;
        // }
        setLoading(true);
        try {
            if (type === "post")
                await createPost(currentUser.uid, e.target[0].value, e.target[1].value, e.target[2].files[0])
            else {
                await createComment(currentUser.uid, e.target[0].value, id);
            }
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
      <>
        {!currentUser && history.push('/login')}
        <div className = "container-fluid px-5 ">
            <div className = {"row no-gutters mt-5"} >
            <div className = "col-2 mx-auto vh-100 d-none d-md-block sticky-top">
                    <div className="card vh-100">
                        <div className = "card-body">

                            <ul className = "list-unstyled side-list text-primary d-block">
                                <li>
                                    <Link to = "/events">Events</Link>
                                </li>
                                <li>
                                    <Link to = "#">Network (coming soon)</Link>
                                </li>
                                <li>
                                    <Link to = "#">Groups (coming soon)</Link>
                                </li>
                                <li>
                                    <Link to = "#">Marketplace (coming soon)</Link>
                                </li>
                            </ul>
                        </div>
                        <div className ="pl-2">
                            <p>Sponsored</p>
                        </div>
                    </div>
                </div>

                <div className = "col-md-5 mx-auto">
                    <Create />
                    <Posts posts={allPosts} handleSubmit = {handleSubmit} handleChange={handleChange}/>
                </div>
                <div className = "col-2 mx-auto vh-100 d-none d-md-block sticky-top">
                  {/*
                    <div className="card vh-100">
                        <div className = "card-body">
                            <Form>
                                <a href="/search"><input className="form-control" type="search" placeholder="🔍 Rise Network Search" aria-label="Search" /></a>
                            </Form>
                        </div>
                        <div className ="pl-2">
                            <p>Sponsored</p>
                        </div>
                    </div>
                    */}
                </div>
            </div>
        </div>
      </>
    )
}

export default Feed;
