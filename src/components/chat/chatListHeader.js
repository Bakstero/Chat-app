import React from 'react';
import {
	ChatHeaderContainer, ChatTitle, ChatContainer, NewChatIcon,
} from './styleChat';
import * as ROUTE from '../../routes/routes';

const chatListHeader = () => (
	<ChatHeaderContainer>
		<ChatTitle title>Chats</ChatTitle>
		<ChatContainer title to={ROUTE.NEW_CHAT}>
			<NewChatIcon />
		</ChatContainer>
	</ChatHeaderContainer>
);

export default chatListHeader;
