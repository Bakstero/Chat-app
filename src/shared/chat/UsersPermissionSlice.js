import { createSlice } from '@reduxjs/toolkit';

const UsersPermission = createSlice({
	name: 'usersPrm',
	initialState: {
		usersPrm: [],
	},
	reducers: {
		addUsersPrm: (state, action) => {
			state.usersPrm = [...state.usersPrm, action.payload];
		},
		removeUsersPrm: (state, action) => {
			state.usersPrm = state.usersPrm.filter(item => item !== action.payload);
		},
	},
});

export default UsersPermission.reducer;

// Actions

export const { addUsersPrm, removeUsersPrm } = UsersPermission.actions;

export const allUsersPrm = state => state.UsersPermission.usersPrm;
