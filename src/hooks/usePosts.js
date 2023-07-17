import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';
import { useAuth } from "../contexts/AuthContext"


const usePosts = (props) => {

    const [posts, setPosts] = useState([]);
    const { currentUser } = useAuth();

    useEffect(() => {
        async function data() {
            let accessMethod = '';
            if (props.username) {
                accessMethod = await projectFirestore.collection('usernames').doc(props.username).get();
                accessMethod = accessMethod.data().uid;
            }
            else
                accessMethod = currentUser.uid;
            let snapshot =  await projectFirestore.collection('posts').doc(accessMethod)
                .collection('allPosts').orderBy('createdAt','desc').get();
            setPosts(snapshot.docs.map(doc => doc.data()));
        }
        data();
    }, [props.updated, props.username, currentUser])

    return { posts };
}

export default usePosts;