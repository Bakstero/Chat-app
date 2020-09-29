import { auth, db } from './firebase';

export const sendUserData = () => {
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

export const UpdateUserDataAferAuth = name => {
	const photoURL = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
	auth().currentUser.updateProfile({
		displayName: name,
		photoURL,
	});
};

export const sendUserDataUsingForm = name => {
	const avatar = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
	const { uid, email } = auth().currentUser;
	if (uid !== null) {
		db.collection('users').doc(uid).set({
			name,
			uid,
			email,
			avatar,
			friends: [],
		});
	}
};
