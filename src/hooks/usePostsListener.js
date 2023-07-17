import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

const usePostsListener = (updated) => {

    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        async function data() {
            const unsubscribe = projectFirestore.collectionGroup('allPosts')
                .orderBy('createdAt', 'desc')
                .onSnapshot(snap => {
                    let collection = [];
                    snap.forEach(post => {
                        collection.push(post.data())
                    })              
                    setAllPosts(collection);
                });
            return () => {
                unsubscribe();
            }
        }
        data();
    }, [updated])

    return { allPosts };
}

export default usePostsListener;