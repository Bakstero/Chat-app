import React from 'react';
import {
	ChatHeaderContainer, ChatTitle, ChatContainer, NewChatIcon,
} from './styleChat';

const ChatsHeader = () => (
	<ChatHeaderContainer title>
		<ChatTitle title>Chats</ChatTitle>
		<ChatContainer title to={'/new/chat'}>
			<NewChatIcon />
		</ChatContainer>
	</ChatHeaderContainer>
);

export default ChatsHeader;
