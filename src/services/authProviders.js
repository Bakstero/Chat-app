import firebase from 'firebase';
import { auth } from './firebase';
import { sendUserData } from './sendUserDataToFirebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

export const googleAuth = () => auth().signInWithPopup(googleProvider)
	.then(() => sendUserData())
	.catch(error => console.log(error.message));

export const fbAuth = () => auth().signInWithPopup(fbProvider)
	.then(() => sendUserData())
	.catch(error => console.log(error.message));

export const logout = () => auth().signOut()
	.catch(error => console.log(error.message));
