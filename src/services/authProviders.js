import firebase from 'firebase';
import { auth, db } from './firebase';
import { success, danger } from '../components/alerts/toasers';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

const sendUserDataToFirestore = () => {
	const user = auth().currentUser;
	if (user !== null) {
		db.collection('users').doc(user.uid).set({
			name: user.displayName,
			uid: user.uid,
			email: user.email,
			avatar: user.photoURL,
			friends: [],
		});
	}
};

export const googleAuth = () => {
	auth().signInWithPopup(googleProvider)
		.then(() => sendUserDataToFirestore())
		.then(() => success('Success login using Google Account', 5))
		.catch(error => danger(error.message, 5));
};

export const fbAuth = () => {
	auth().signInWithPopup(fbProvider)
		.then(() => success('Success login using Facebook Account', 5))
		.then(() => sendUserDataToFirestore())
		.catch(error => danger(error.message, 5));
};

export const emailAuth = (email, password) => {
	auth().createUserWithEmailAndPassword(email, password)
		.then(() => sendUserDataToFirestore())
		.then(() => success('Success create account', 5))
		.catch(error => danger(error.message, 5));
};

export const loginAuth = (email, password) => {
	auth().signInWithEmailAndPassword(email, password)
		.then(() => success('Success login', 5))
		.catch(error => danger(error.message, 5));
};

export function logout() {
	return auth()
		.signOut()
		.then(() => success('Success logout', 5))
		.catch(error => danger(error.message, 5));
}
