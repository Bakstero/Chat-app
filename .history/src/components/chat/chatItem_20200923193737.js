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


const ChatItem = ({ item: { id, name, avatar, } }) => (
	<Wrapper to={`/chat/${id}`}>
		<ChatAvatar src={avatar} />
			<h2>{name}</h2>

	</Wrapper>
);

export default ChatItem;
