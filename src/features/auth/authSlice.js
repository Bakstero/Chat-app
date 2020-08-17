import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	synced: false,
	user: null,
};

export const AuthSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.synced = true;
			state.user = action.payload;
		},
		logout: state => {
			state.user = null;
		},
	},
});

export const { login, logout } = AuthSlice.actions;

export const selectCurrentUser = state => state.auth.user;

export default AuthSlice.reducer;
