import React from 'react';
import MessagesList from '../features/messages/getMessages/messagesList';
import MsgForm from '../features/messages/createMessages/msgForm';

const ChatPage = () => (
	<div>
		<MessagesList />
		<MsgForm />
	</div>
);

export default ChatPage;
