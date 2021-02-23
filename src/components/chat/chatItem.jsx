import React from 'react';
import { ChatContainer, ChatAvatar, ChatTitle } from './styleChat';

const ChatItem = ({ item: { id, name, avatar } }) => (
	<ChatContainer to={`/chat/${id}`} >
		<ChatAvatar src={avatar} />
		<ChatTitle>{name}</ChatTitle>
	</ChatContainer>

);

export default ChatItem;
