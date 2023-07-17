import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';

const usePublic = (username, updated) => {

    const [docs, setDocs] = useState({});

    useEffect(() => {
        async function data(username) {
            const snapshot =  await projectFirestore.collection('usernames').doc(username).get()
            setDocs(snapshot.data())
        }
        if (username)
            data(username);
    }, [username, updated])

    return { docs };
}

export default usePublic