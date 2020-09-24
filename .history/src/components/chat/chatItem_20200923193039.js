import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';


const ChatItem = ({ item: { id, name } }) => (
	<Link to={`/chat/${id}`}>
		<div>
			<h2>{name}</h2>
		</div>
	</Link>
);

export default ChatItem;
