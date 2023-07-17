
import { projectFirestore, projectStorage, timestamp, increment } from "../firebase"

export const getComments = async (postId) => {
    const comments = await projectFirestore.collection('comments').doc(postId)
        .collection('allComments').orderBy('createdAt', 'asc').get();
    return comments.docs;
    
}

export const createPost = async (userId, title, desc, file) => {
    const collectionRef = projectFirestore.collection('posts').doc(userId)
        .collection("allPosts").doc()
    let storageRef = null;
    const usernameGet = await projectFirestore.collection('profiles').doc(userId).get()
    await collectionRef.set({
        title,
        description: desc,
        username: usernameGet.data().username,
        createdAt: timestamp(),
        uid: userId,
        id: collectionRef.id,
    })
    if (file && (file.type === 'image/png' || file.type === 'image/jpg')) {
        storageRef = projectStorage.ref().child(file.name);
        const url = await storageRef.getDownloadURL();
        await collectionRef.update({
            file: url
        })
    }
}

export const deletePost = async (userId, postId) => {
    const postGet = projectFirestore.collection('posts').doc(userId)
        .collection("allPosts").doc(postId);
    //extra check
    if (userId.localeCompare(postGet.uid)) {
        await postGet.delete();
    }
}

export const createComment = async (userId, desc, commentId, owner) => {
    const commentRef = projectFirestore.collection('comments').doc(commentId);
    const usernameGet = await projectFirestore.collection('profiles').doc(userId).get();
    await commentRef.collection("allComments").doc().set({
        desc,
        user: usernameGet.data().username,
        image: usernameGet.data().img, 
        createdAt: timestamp(),
    })
    await commentRef.set({
        count: increment(1)
    })
    if (userId !== owner) {
        await createNotification(`${usernameGet.data().username} commented on your post!`, owner, usernameGet.data().username)
    }
}

export const createLike = async (userId, item_id, owner) => {
    const likesRef = projectFirestore.collection('likes').doc(item_id);
    const getLikes = await likesRef.get();
    const usernameGet = await projectFirestore.collection('profiles').doc(userId).get();
    const getAllLikes = await likesRef.collection('allLikes').doc(userId).get();
    let value;
    if (!getLikes.exists) {
        await likesRef.set({
            count: 0
        })
    }
    if (getAllLikes.exists) {
        await likesRef.collection('allLikes').doc(userId).delete();
        value = -1;
    }
    else {
        await likesRef.collection('allLikes').doc(userId).set({
            user: usernameGet.data().username,
            itemId: item_id,
            createdAt: timestamp(),
        })
        value = 1;
        if (userId !== owner) {
            await createNotification(`${usernameGet.data().username} liked your post!`, owner, usernameGet.data().username)
        }
    }
    await likesRef.update({
        count: increment(value),
    })
}

const createNotification = async (message, owner, username) => {
    const docId = projectFirestore.collection('profiles').doc(owner).collection('notifications').doc();
    await docId.set({
        notificationMessage: message,
        fromUser: username,
        createdAt: timestamp(),
        id: docId.id
    })
}
