import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ChatAvatar = styled.img`
	border-radius: 12px;
	width: 50px;
	height: 50px;
`;

export const ChatContainer = styled(Link)`
	text-decoration:none;
	width: 95%;
	height: 75px;
	margin-top:10px;
	padding: 5px;
	border-radius: 10px;
	display: flex;
	align-items:center;
	justify-content: flex-start;
`;

export const ChatTitle = styled.p`
	color:${({ theme }) => theme.colors.black};
	margin-left: 15px;
`;

const ChatItem = ({ item: { id, name, avatar } }) => (
	<ChatContainer to={`/chat/${id}`} >
		<ChatAvatar src={avatar} />
		<ChatTitle>{name}</ChatTitle>
	</ChatContainer>

);

export default ChatItem;
