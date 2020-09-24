import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ChatAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const ChatContainer = styled(Link)`
	width: 250px;
	height: 50px;
	border-radius: 150px 5px 5px 150px;
	margin-top:20px;
	display: flex;
	align-items:center;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.colors.primary}
`;

export const ChatTitle = styled.p`
	color:${({ theme }) => theme.colors.white};
	margin-left:20px;
`;

const ChatItem = ({ item: { id, name, avatar } }) => (
	<ChatContainer to={`/chat/${id}`} >
		<ChatAvatar src={avatar} />
		<ChatTitle>{name}</ChatTitle>
	</ChatContainer>

);

export default ChatItem;
