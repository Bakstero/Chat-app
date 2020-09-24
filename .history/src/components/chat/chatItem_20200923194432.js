import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ChatAvatar = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

const ChatContainer = styled(Link)`
	width: 90vw;
	height: 100%;
	border-radius: 50px 5px 5px 50px;
	display: flex;
	align-items:center;
	justify-content:center;
	background-color: ${({ theme }) => theme.colors.primary}
`;

const ChatItem = ({ item: { id, name, avatar } }) => (
	<ChatContainer to={`/chat/${id}`} >
		<ChatAvatar src={avatar} />
		<h2>{name}</h2>
	</ChatContainer>

);

export default ChatItem;
