import React from 'react';
import MessagesList from './messagesList';
import NewMessageForm from './newMessage/newMessageForm';
import { MessagesContainer } from './styleMessageItem';

const MessagesContainter = () => (
	<MessagesContainer>
		<MessagesList />
		<NewMessageForm />
	</MessagesContainer>
);

export default MessagesContainter;
