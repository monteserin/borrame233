import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "./firebase";
import { collection, getDocs, query, doc, getDoc, addDoc, deleteDoc, updateDoc, setDoc, where } from "firebase/firestore";
import { db } from './firebase';

const itemsCollection = collection(db, 'items');

// CREATE
export const createOrder = (obj) => {
    const itemsCollection = collection(db, 'orders');
    return addDoc(itemsCollection, obj).id;
}


export const signUp = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        const user = userCredential.user;
        await setDoc(doc(db, 'users', user.uid));
        return user.uid;
    }).catch((error) => {
        console.log(error);
    });
}

export const signIn = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password).then(async (userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;
        return user.uid;
    })
        .catch(error => {
            console.log(error);
        })
}

export const getCurrentUser = async () => await auth.currentUser;
export const logout = async () => await signOut(auth);

