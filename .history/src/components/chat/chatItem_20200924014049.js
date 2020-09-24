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
	width: 95%;
	height: 20%;
	margin-top:15px;
	padding: 5px;
	display: flex;
	border-radius: 10px;
	align-items:center;
	justify-content: flex-start;
`;

export const ChatTitle = styled.p`
	color:${({ theme }) => theme.colors.black};
	margin-left: 15px;

	@media ${({ theme }) => theme.device.mobileS} {
		display:none;
  }
	@media ${({ theme }) => theme.device.tablet} {
		width: 100px;
		height: 35px;
		border-radius: 5px;
  }
`;

const ChatItem = ({ item: { id, name, avatar } }) => (
	<ChatContainer to={`/chat/${id}`} >
		<ChatAvatar src={avatar} />
		<ChatTitle>{name}</ChatTitle>
	</ChatContainer>

);

export default ChatItem;
