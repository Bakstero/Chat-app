import { createSlice } from '@reduxjs/toolkit';
import { db, auth } from '../../services/firebase';

const editUserSlice = createSlice({
	name: 'editUser',
	initialState: {
		newName: null,
		isLoading: false,
		error: false,
	},
	reducers: {
		startPending: state => {
			state.isLoading = true;
		},
		editError: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		editUserNameSuccess: (state, action) => {
			state.newName = action.payload;
			state.isLoading = false;
		},
	},
});

export default editUserSlice.reducer;

// Actions

export const { editUserNameSuccess, startPending, editError } = editUserSlice.actions;

export const EditUserName = (docID, message) => async dispatch => {
	dispatch(startPending());
	try {
		auth().currentUser.updateProfile({
			displayName: dispatch(editUserNameSuccess(message)).payload,
		});
		db.collection('users').doc(docID).set({
			name: dispatch(editUserNameSuccess(message)).payload,
		}, { merge: true });
	} catch (e) {
		dispatch(editError(e.messagess));
	}
};
