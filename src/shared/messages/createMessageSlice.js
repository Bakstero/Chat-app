import { createSlice } from '@reduxjs/toolkit';
import { db, dbUpdate } from '../../services/firebase';

const createMsgSlice = createSlice({
	name: 'newMessage',
	initialState: {
		newMessage: [],
		isLoading: false,
		error: false,
	},
	reducers: {
		startPending: state => {
			state.isLoading = true;
		},
		fetchMessageError: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		createMsgSuccess: (state, action) => {
			state.newMessage = action.payload;
			state.isLoading = false;
		},
	},
});

export default createMsgSlice.reducer;

// Actions

export const { createMsgSuccess, startPending, fetchMessageError } = createMsgSlice.actions;

export const SendMsg = (docID, message) => async dispatch => {
	dispatch(startPending());
	try {
		await db.collection('chat')
			.doc(docID)
			.update({
				messages: dbUpdate.FieldValue.arrayUnion(dispatch(createMsgSuccess(message)).payload),
			});
	} catch (e) {
		dispatch(fetchMessageError(e.messagess));
	}
};
