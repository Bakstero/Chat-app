import React from 'react';
import Layout from '../layout/layout';
import ChatContainer from '../components/chat/chatContainer';
import CreateChatForm from '../components/chat/createChatForm';
const ChatPage = () => (
	<Layout>
		<ChatContainer />
		<CreateChatForm/>
	</Layout>
);

export default ChatPage;
