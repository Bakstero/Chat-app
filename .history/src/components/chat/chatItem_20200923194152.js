import React from 'react';

import styled from 'styled-components';

const ChatAvatar = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

const ChatContainer = styled.div`
	width: 90vw;
	height: 100%;
	border-radius: 5px;
	display: flex;
	align-items:center;
	justify-content:center;
	background-color: ${({ theme }) => theme.colors.primary}
`;

const ChatItem = ({ item: { id, name, avatar } }) => (
	<ChatContainer>
		<ChatAvatar src={avatar} />
		<h2>{name}</h2>
	</ChatContainer>

);

export default ChatItem;
