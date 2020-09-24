import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
	text-decoration: none;
	width: 50px;
	height: 100%;
	display: flex;
	align-items:center;
	justify-content:center;
`;

const ChatItem = ({ item: { id, name, avatar, } }) => (
	<Wrapper to={`/chat/${id}`}>
		<div>
			<h2>{name}</h2>
			<img src={avatar}/>
		</div>
	</Wrapper>
);

export default ChatItem;
