import React from 'react';
import MessagesList from '../components/messages/messagesList';
import CreateMessageForm from '../components/messages/createMessageForm';
import Layout from '../layout/layout';


const ChatPage = () => (
	<Layout>
		<MessagesList />
		<h1>Chat</h1>
		<CreateMessageForm />
	</Layout>
);

export default ChatPage;
