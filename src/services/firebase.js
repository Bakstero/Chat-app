import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCImgiUnswIWsNwEEBjoWXynbf0oQqiW9w',
	authDomain: 'chatapp-88217.firebaseapp.com',
	databaseURL: 'https://chatapp-88217.firebaseio.com',
	projectId: 'chatapp-88217',
	storageBucket: 'chatapp-88217.appspot.com',
	messagingSenderId: '479486687984',
	appId: '1:479486687984:web:2eb11bca93d572abf22035',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth;
export const db = firebase.firestore();
export const addData = firebase.firestore.FieldValue;
