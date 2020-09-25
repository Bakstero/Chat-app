import React from 'react';
import MessagesContainer from '../components/messages/messagesContainer';

import Layout from '../layout/layout';
import ChatContainer from '../components/chat/chatContainer';

const ChatPage = () => (
	<Layout>
		<ChatContainer />
		<MessagesContainer />
	</Layout>
);

export default ChatPage;
