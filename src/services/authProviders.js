import firebase from 'firebase';
import { auth } from './firebase';
import {
	sendUserData,
	sendUserDataUsingForm,
	UpdateUserDataAferAuth,
} from './sendUserDataToFirebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

export const googleAuth = () => {
	auth().signInWithPopup(googleProvider)
		.then(() => sendUserData())
		.catch(error => console.log(error.message));
};

export const fbAuth = () => {
	auth().signInWithPopup(fbProvider)
		.then(() => sendUserData())
		.catch(error => console.log(error.message));
};

export const emailAuth = (email, password, name) => {
	auth().createUserWithEmailAndPassword(email, password)
		.then(() => UpdateUserDataAferAuth(name))
		.then(() => sendUserDataUsingForm(name))
		.catch(error => console.log(error.message));
};

export const loginAuth = (email, password) => {
	auth().signInWithEmailAndPassword(email, password)
		.catch(error => console.log(error.message));
};

export function logout() {
	return auth().signOut()
		.catch(error => console.log(error.message));
}
