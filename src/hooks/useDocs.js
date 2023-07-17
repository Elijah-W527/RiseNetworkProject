import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase';
import { useAuth } from "../contexts/AuthContext"

const useDocs = (collection, updated) => {

    const { currentUser } = useAuth();
    const [docs, setDocs] = useState({});

    useEffect(() => {
        projectFirestore.collection(collection).doc(currentUser.uid).get()
            .then((data) => {
                setDocs(
                    data.data()
                )
            })
    }, [collection, updated, currentUser])

    return { docs };
}

export default useDocs;