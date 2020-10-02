import { createSlice } from '@reduxjs/toolkit';
import { db } from '../../services/firebase';

// Slice

const getUsersSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
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
		usersSuccess: (state, action) => {
			state.users = action.payload;
			state.isLoading = false;
		},
	},
});

export default getUsersSlice.reducer;

// Actions

const { usersSuccess, startLoading, hasError } = getUsersSlice.actions;

export const selectAllUser = state => state.users.users;

export const fetchUsers = () => async dispatch => {
	dispatch(startLoading());
	try {
		await db.collection('users')
			.onSnapshot(querySnapshot => {
				const usersDocs = querySnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}));
				dispatch(usersSuccess(usersDocs));
			});
	} catch (e) {
		dispatch(hasError(e.message));
	}
};
