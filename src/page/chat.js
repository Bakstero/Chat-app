import React from 'react';
import MessagesContainer from '../components/messages/messagesContainer';

import Layout from '../layout/layout';
import { ChatContainerMobile } from '../components/chat/chatContainer';

const ChatPage = () => (
	<Layout>
		<ChatContainerMobile />
		<MessagesContainer />
	</Layout>
);

export default ChatPage;
