import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { projectFirestore } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';
import { Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faShare, faTrash } from '@fortawesome/free-solid-svg-icons';
import { getComments, createComment, createLike, deletePost } from '../FirebaseFunctions';
import Likes from './Likes';

const Posts = ({ posts }) => {

    let post_cnt = 0;
    const [firebaseData, setFirebaseData] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [updated, setUpdated] = useState(false)
    const [loading, setLoading] = useState(true);
    const { currentUser } = useAuth();
    const defaultPic = "https://firebasestorage.googleapis.com/v0/b/auth-development-53223.appspot.com/o/profile%20picture.png?alt=media&token=6ebbbce8-3caf-4017-a8c3-0b126224e632";

    const increase = () => {
        post_cnt++;
    }

    useEffect(() => {
        const data = async () => {
            let firebaseData = await Promise.all(posts.map(async post => {
                const getUser = await projectFirestore.collection('usernames').doc(post.username).get();
                const getLikes = await projectFirestore.collection('likes').doc(post.id).get();
                const likes = getLikes.data() ? getLikes.data().count : 0
                return {
                    username: post.username,
                    name: getUser.data().name,
                    title: post.title,
                    description: post.description,
                    createdAt: post.createdAt,
                    image: getUser.data().img,
                    id: post.id,
                    uid: post.uid,
                    file: post.file,
                    likes,
                    photo: post.photo,
                    comments: await getComments(post.id)
                }
            }))
            setFirebaseData(firebaseData)
        }
        data();
    }, [posts])

    const handleSubmit = (postId, ownerId) => async e => {
        e.preventDefault();
        setError('');
        setSuccess('');
        // if (/[^a-zA-Z\s]/.test(e.target[0].value)) {
        //     setError("Please only enter letters")
        //     return false;
        // }
        try {
            await createComment(currentUser.uid, e.target[0].value, postId, ownerId);
            setSuccess("Successfully updated")
            setUpdated(!updated);
        } catch (err) {
            console.log(err);
            setError("Failed to update account")
        } finally {
            setLoading(false);
            document.getElementById("createComment").reset();
        }
    }

    function handleChange() {
        if (loading !== false)
            setLoading(false);
    }

    const handleLike = async (item_id, owner) => {
        try {
            await createLike(currentUser.uid, item_id, owner);
            setSuccess("Successfully updated")
            setUpdated(!updated);
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false);
        }
    }

    const handleDelete = async (postId) => {
        try {
            await deletePost(currentUser.uid, postId);
            setSuccess("Post deleted!")
            setUpdated(!updated);
        } catch (err) {
            setError(err)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className = "posts accordian" id="accordionExample">
        { firebaseData && firebaseData.map(post =>
            <div key = {post.id}>
                <div className="card gedf-card">
                    <div className="card-header">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="mr-2">
                                <img className="rounded-circle" width="50" height = "50" src={post.image ? post.image : defaultPic}
                                    alt = "Poster profile"
                                />
                                </div>
                                <div className="ml-2">
                                    <div className="h5 m-0"><Link to = {"/user/"+post.username}>@{post.username}</Link></div>
                                    <div className="h7 text-muted">{post.name}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <div className="text-muted h7 mb-2"> <i className="fa fa-clock-o"></i>{post.createdAt && post.createdAt.toDate().toLocaleDateString()}</div>
                  
                        <h5 className="card-title">{post.title && post.title}</h5>
                    
                        <p className="card-text">
                            {post.description}
                        </p>
                        {post.file && <img className = "img-fluid w-50 rounded" src = {post.file}
                            alt = "Post content" />}
                    </div>
                    <div className="card-footer">
                        <Likes item = {post} handleLike={handleLike} />
                        <FontAwesomeIcon size = "lg"  className = "ml-3" icon={faComment} data-toggle="collapse" data-target={"#collapse"+ post_cnt} aria-expanded="true" aria-controls={"collapse"+ post_cnt} />
                        <p className = "d-inline ml-1">{post.comments.length}</p>
                        <FontAwesomeIcon size = "lg" className = "ml-3" icon={faShare} />
                        <p className = "d-inline ml-1 mr-3">0</p>
                        {currentUser && !currentUser.uid.localeCompare(post.uid) ?
                            <FontAwesomeIcon size = "lg" color = "black" icon={faTrash} onClick = {() => handleDelete(post.id)} /> : <></>
                        }
                    </div>
                </div>
                <div>
                    <div>
                    {post.comments && post.comments.map(comment =>     
                            <div className="card card-body">
                                <div className="text-muted h7 mb-2">
                                    <img className="rounded-circle mr-3" width="40" height = "40" src={comment.data().image ? 
                                        comment.data().image : defaultPic}
                                            alt = "Commenter profile"
                                        />
                                    <Link to = {"/user/"+comment.data().user}>@{comment.data().user}</Link>
                                    {" - " + comment.data().createdAt.toDate().toLocaleDateString()}
                                </div>
                                <label> {comment.data().desc} </label>
                            </div>
                    )}
                    </div>
                </div>

                <div id={"collapse"+ post_cnt} className="card card-body collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                { error && <Alert variant="danger">{error}</Alert> }
                { success && <Alert variant="success">{success}</Alert> }
                    <form id = "createComment" onChange = { handleChange } onSubmit = { handleSubmit(post.id, post.uid)}>
                        <div className="form-group">
                            <label>Leave a comment</label>
                            <textarea id = "create" name="description" type="text" className="form-control" minLength = "1" required></textarea>
                        </div>
                        <button disabled={loading} className="btn btn-primary w-100" type ="submit">Create</button>
                    </form>
                </div>
                <br></br>
                { increase() }
            </div>
        )}
    </div>
    )
}

export default Posts;