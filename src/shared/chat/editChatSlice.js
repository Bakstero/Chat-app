import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../services/firebase';

const editChatSlice = createSlice({
	name: 'editChatName',
	initialState: {
		newChatName: null,
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
		editChatNameSuccess: (state, action) => {
			state.newChatName = action.payload;
			state.isLoading = false;
		},
	},
});

export default editChatSlice.reducer;

// Actions

export const { editChatNameSuccess, startPending, editError } = editChatSlice.actions;

export const editChatName = (docID, message) => async dispatch => {
	dispatch(startPending());
	try {
		db.collection('chat').doc(docID).set({
			name: dispatch(editChatNameSuccess(message)).payload,
		}, { merge: true });
	} catch (e) {
		dispatch(editError(e.messagess));
	}
};
