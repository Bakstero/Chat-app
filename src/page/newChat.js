import React from 'react';
import Layout from '../layout/layout';
import { ChatContainerOffMobile } from '../components/chat/chatContainer';
import CreateChatForm from '../components/chat/newChat/createChatForm';

const ChatPage = () => (
	<Layout>
		<ChatContainerOffMobile />
		<CreateChatForm/>
	</Layout>
);

export default ChatPage;
