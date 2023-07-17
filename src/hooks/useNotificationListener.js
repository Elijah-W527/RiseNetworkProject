import { useEffect, useState } from "react";
import { useAuth } from '../contexts/AuthContext';
import { projectFirestore } from '../firebase';

const useNotificationListener = () => {
    const { currentUser } = useAuth();
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        const data = async () => {
            const notificationRef = await projectFirestore.collection('profiles').doc(currentUser.uid)
                .collection('notifications').get();
            setNotifications(notificationRef.docs.map(doc => doc.data())) 
            const unsubscribe = projectFirestore.collection('profiles').doc(currentUser.uid)
                .collection('notifications')
                .orderBy('createdAt', 'desc')
                .limit(7)
                .onSnapshot(snap => {
                    setNotifications(snap.docs.map(doc => doc.data())) 
                })
            return () => unsubscribe();
        }   
        data();
    }, [currentUser.uid])

    return { notifications };
}

export default useNotificationListener;