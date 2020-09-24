import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
	text-decoration: none;
	width: 100%;
	height: 100px;
	display: flex;
	align-items:center;
	justify-content:center;
`;

const ChatAvatar = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 50%;
`;

const ChatContainer = styled(Link)`
	width: 100%;
	height: 100%;
	display: flex;
	align-items:center;
	justify-content:center;
`;


const ChatItem = ({ item: { id, name, avatar, } }) => (
	<Wrapper to={`/chat/${id}`}>
		<ChatContainer>
			<ChatAvatar src={avatar} />
			<h2>{name}</h2>
		</ChatContainer>
	</Wrapper>
);

export default ChatItem;
