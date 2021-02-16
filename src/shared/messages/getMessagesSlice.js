import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../services/firebase';

const getMsgSlice = createSlice({
	name: 'messages',
	initialState: {
		messages: [],
		isLoading: false,
		error: false,
	},
	reducers: {
		startLoading: state => {
			state.isLoading = true;
		},
		hasError: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		messagesSuccess: (state, action) => {
			state.messages = action.payload;
			state.isLoading = false;
		},
	},
});

export default getMsgSlice.reducer;

// Actions

const { messagesSuccess, startLoading, hasError } = getMsgSlice.actions;

export const fetchMessages = docID => async dispatch => {
	dispatch(startLoading());
	try {
		await db.collection('chat').doc(docID)
			.onSnapshot(querySnapshot => {
				dispatch(messagesSuccess(querySnapshot.data().messages));
			});
	} catch (e) {
		dispatch(hasError(e.message));
	}
};
