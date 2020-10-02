import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../services/firebase';

const createNewChat = createSlice({
	name: 'newChat',
	initialState: {
		newChat: null,
		isLoading: false,
		error: false,
	},
	reducers: {
		startCreating: state => {
			state.isLoading = true;
		},
		createChatError: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
		},
		createChatSuccess: (state, action) => {
			state.newChat = action.payload;
			state.isLoading = false;
		},
	},
});

export default createNewChat.reducer;

// Actions
export const AuthUser = state => state.newChat.userAuth;

export const {
	createChatSuccess, startCreating, createChatError,
} = createNewChat.actions;

export const CreateChat = name => async dispatch => {
	dispatch(startCreating());
	try {
		await db.collection('chat')
			.doc()
			.set(dispatch(createChatSuccess(name)).payload);
	} catch (e) {
		dispatch(createChatError(e.messagess));
	}
};
