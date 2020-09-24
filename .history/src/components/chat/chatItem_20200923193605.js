import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
	text-decoration: none;
	min-width: 60px;
	height: 100%;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	margin: 0px 15px 0px 15px;
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
