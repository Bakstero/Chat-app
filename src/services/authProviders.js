import firebase from 'firebase';
import { auth, db } from './firebase';

const googleProvider = new firebase.auth.GoogleAuthProvider();
const fbProvider = new firebase.auth.FacebookAuthProvider();

const sendUserDataToFirestore = () => {
	const {
		uid, displayName, email, photoURL,
	} = auth().currentUser;

	if (uid !== null) {
		db.collection('users').doc(uid).set({
			name: displayName,
			uid,
			email,
			avatar: photoURL,
			friends: [],
		});
	}
};

export const googleAuth = () => {
	auth().signInWithPopup(googleProvider)
		.then(() => sendUserDataToFirestore())
		.catch(error => console.log(error.message));
};

export const fbAuth = () => {
	auth().signInWithPopup(fbProvider)
		.then(() => sendUserDataToFirestore())
		.catch(error => console.log(error.message));
};

export const emailAuth = (email, password) => {
	auth().createUserWithEmailAndPassword(email, password)
		.then(() => sendUserDataToFirestore())
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

/*
create default avatar
	if (photoURL === null) {
		const avatar = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
		db.collection('users').doc(uid).set({ avatar }, { merge: true }); // update database avatar
		auth().currentUser.updateProfile({ photoURL: avatar }); // update auth data avatar
	}

*/
