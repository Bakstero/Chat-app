import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from '../shared/auth/authSlice';
import newMessage from '../shared/messages/createMessageSlice';
import users from '../shared/users/getUsersSlice';
import messages from '../shared/messages/getMessagesSlice';
import chats from '../shared/chat/getChatSlice';
import addUserAuth from '../shared/chat/addUsersAuthSlice';
import newChat from '../shared/chat/createChatSlice';

export default configureStore({
	reducer: {
		auth: AuthReducer,
		users,
		newMessage,
		messages,
		newChat,
		addUserAuth,
		chats,
	},
});
