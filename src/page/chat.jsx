import React from 'react';
import MessagesContainer from '../components/messages/messagesContainer';

import Layout from '../layout/layout';
import { ChatContainerOffMobile } from '../components/chat/chatContainer';

const ChatPage = () => (
	<Layout>
		<ChatContainerOffMobile />
		<MessagesContainer />
	</Layout>
);

export default ChatPage;
