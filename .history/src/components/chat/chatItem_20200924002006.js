import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ChatAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const ChatContainer = styled(Link)`
	text-decoration:none;
	width: 80%;
	height: 75px;
	margin-top:20px;
	padding: 10px;
	display: flex;
	border-radius: 15px;
	align-items:center;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.colors.primary}
`;

export const ChatTitle = styled.p`
	color:${({ theme }) => theme.colors.white};
	margin-left: 15px;
`;

const ChatItem = ({ item: { id, name, avatar } }) => (
	<ChatContainer to={`/chat/${id}`} >
		<ChatAvatar src={avatar} />
		<ChatTitle>{name}</ChatTitle>
	</ChatContainer>

);

export default ChatItem;
