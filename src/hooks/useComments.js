import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

const useComments = (id, updated) => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function data() {
            const commentsRef = await projectFirestore.collection('comments').doc(id)
                .collection('allComments')
                .orderBy('createdAt', 'desc')
                .get();
            setComments(commentsRef.docs.map(doc => doc.data()))  
        }
        if (id)
            data();
    }, [id, updated])

    return { comments };
}

export default useComments;