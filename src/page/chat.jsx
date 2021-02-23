import React from 'react';
import MessagesContainer from '../components/messages/messagesContainer';

import Layout from '../layout/layout';
import { ChatContainerOffMobile } from '../components/chat/chatContainer';
import EditChatName from '../components/chat/editChat/editChatName';

const ChatPage = () => (
	<Layout>
		<ChatContainerOffMobile />
		<MessagesContainer />
		<EditChatName />
	</Layout>
);

export default ChatPage;
