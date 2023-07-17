import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

const useLikesListener = (item_id) => {

    const [likes, setLikes] = useState(null);

    useEffect(() => {
        const data = async () => {
            const likesRef = await projectFirestore.collection('likes').doc(item_id).get();
            if (likesRef.exists) {
                const unsubscribe = projectFirestore.collection('likes').doc(item_id)
                    .onSnapshot(snap => {
                        setLikes(snap.data().count);
                    });
                return () => {
                    unsubscribe();
                }
            }
        }
        data();
    }, )

    return { likes };
}

export default useLikesListener;