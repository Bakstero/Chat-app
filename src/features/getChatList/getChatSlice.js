import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../services/firebase';

const getChatsSlice = createSlice({
	name: 'chats',
	initialState: {
		chats: [],
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
		getChatsSuccess: (state, action) => {
			state.chats = action.payload;
			state.isLoading = false;
		},
	},
});

export default getChatsSlice.reducer;

// Actions

const { getChatsSuccess, startLoading, hasError } = getChatsSlice.actions;

export const fetchChats = userID => async dispatch => {
	dispatch(startLoading());
	try {
		await db.collection('chat').where('usersAuth', 'array-contains', userID)
			.onSnapshot(querySnapshot => {
				const chatsList = querySnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}));
				dispatch(getChatsSuccess(chatsList));
			});
	} catch (e) {
		dispatch(hasError(e.message));
	}
};
