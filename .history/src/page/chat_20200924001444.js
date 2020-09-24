import React from 'react';
import MessagesList from '../components/messages/messagesList';
import CreateMessageForm from '../components/messages/createMessageForm';
import Layout from '../layout/layout';
import ChatsList from '../components/chat/chatsList';
const ChatPage = () => (
	<Layout>
		<ChatsList />
		<MessagesList />
		<h1>Chat</h1>
		<CreateMessageForm />
	</Layout>
);

export default ChatPage;
