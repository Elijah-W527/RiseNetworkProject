import React, { useContext, useState, useEffect } from "react"
import { auth, projectFirestore, projectStorage, timestamp } from "../firebase"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();
    const defaultPic = "https://firebasestorage.googleapis.com/v0/b/auth-development-53223.appspot.com/o/profile%20picture.png?alt=media&token=6ebbbce8-3caf-4017-a8c3-0b126224e632"

    async function signup(email, password, username) {
        //create new user with provided data of the form
        const user = await auth.createUserWithEmailAndPassword(email, password)
        await projectFirestore.collection('profiles').doc(user.user.uid).set({
            username: username,
            createdAt: timestamp(),
        })
        await projectFirestore.collection('usernames').doc(username).set({
            uid: user.user.uid,
            img: defaultPic
        })
        await projectFirestore.collection('purchases').doc(user.user.uid).set({
            username: username,
            relationships101: false
        })
    }

    async function login(email, password) {
        await auth.signInWithEmailAndPassword(email, password);
    }

    function logout() {
        return auth.signOut();
    }

    function resetPassword(email) {
        return auth.sendPasswordResetEmail(email);
    }

    function updateEmail(email) {
        return currentUser.updateEmail(email);
    }

    function updatePassword(password) {
        return currentUser.updatePassword(password);
    }

    async function updateProfile(name, bio, pic, header) {
        const profileRef = projectFirestore.collection('profiles').doc(currentUser.uid);
        const profileRefData = await profileRef.get();
        const usernameRef = projectFirestore.collection('usernames')
            .doc(profileRefData.data().username)
        await profileRef.update({
            name,
            bio
        })
        await usernameRef.update({
            name,
            bio
        })
        await addImage(pic, 'img', profileRef, usernameRef)
        await addImage(header, 'header', profileRef, usernameRef)

    }


    async function purchaseBook(uid) {
        await projectFirestore.collection('purchases').doc(uid).set({
            relationships101: true
        })
    }

    // function purchasedBook(uid) {
    //     return projectFirestore.collection('purchases').doc(uid).get().relationships101;
    // }

    async function addImage(file, field, ref, ref2) {
        if (file && (file.type === 'image/png' || file.type === 'image/jpeg')) {
            let storageRef = projectStorage.ref().child(file.name)
            await storageRef.put(file)
            const url = await storageRef.getDownloadURL()
            if (ref) {
                await ref.update({
                    [field] : url
                })
            }
            if (ref2) {
                await ref2.update({
                    [field] : url
                })
            }
        }
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe;
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateProfile,
        purchaseBook,
    }

    return (
        <AuthContext.Provider value = {value}>
            { !loading && children }
        </AuthContext.Provider>
    )
}
