import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import AuthReducer from '../features/auth/authSlice';
import newMessage from '../features/messages/createMessages/createMsgSlice';
import users from '../features/getUsers/getUsersSlice';
import messages from '../features/messages/getMessages/getMessagesSlice';
import chats from '../features/getChatList/getChatSlice';
import newChat from '../features/createChat/createChatSlice';

export default configureStore({
	reducer: {
		counter: counterReducer,
		auth: AuthReducer,
		users,
		newMessage,
		messages,
		newChat,
		chats,
	},
});
