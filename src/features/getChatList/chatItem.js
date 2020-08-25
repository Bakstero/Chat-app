import React from 'react';
import { Link } from 'react-router-dom';
import { Pane, Heading } from 'evergreen-ui';

const ChatItem = ({ chat: { id, name } }) => (
	<Link to={`/chat/${id}`}>
		<Pane
			display="flex"
			alignItems="center"
			justifyContent="center"
			background="tint1"
			padding={24}
			marginTop={16}
		>
			<Heading
				size={700}
			>{name}</Heading>
		</Pane>
	</Link>
);

export default ChatItem;
