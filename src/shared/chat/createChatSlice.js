import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../services/firebase';

const createNewChat = createSlice({
	name: 'newChat',
	initialState: {
		newChat: null,
		usersPrm: [],
		isLoading: false,
		error: false,
	},
	reducers: {
		startCreating: state => {
			state.isLoading = true;
		},
		addUsersPrm: (state, action) => {
			state.usersPrm = [...state.usersPrm, action.payload];
		},
		removeUsersPrm: (state, action) => {
			state.usersPrm = state.usersPrm.filter(item => item !== action.payload);
		},
		createChatError: (state, action) => {
			state.error = action.payload;
			state.isLoading = false;
			state.usersPrm = [];
		},
		createChatSuccess: (state, action) => {
			state.newChat = action.payload;
			state.isLoading = false;
			state.usersPrm = [];
		},
	},
});

export default createNewChat.reducer;

// Actions
export const AuthUser = state => state.newChat.userAuth;
export const allUsersPrm = state => state.newChat.usersPrm;

export const {
	createChatSuccess, startCreating, createChatError, addUsersPrm, removeUsersPrm,
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
