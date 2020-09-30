import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	synced: false,
	user: null,
	error: null,
};

export const AuthSlice = createSlice({
	name: 'userAuth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.synced = true;
			state.user = action.payload;
		},
		errorLogin: (state, action) => {
			state.user = null;
			state.error = action.payload;
		},
		logout: state => {
			state.user = null;
		},
	},
});

export const { login, errorLogin, logout } = AuthSlice.actions;

export const AuthUser = state => state.auth.synced;
export const selectCurrentUser = state => state.auth.user;
export const errorLoginuser = state => state.auth.error;
export default AuthSlice.reducer;

