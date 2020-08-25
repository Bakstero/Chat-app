import React, { useEffect } from 'react';
import { Pane } from 'evergreen-ui';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChats } from './getChatSlice';
import ChatItem from './chatItem';

const ChatsList = () => {
	const dispatch = useDispatch();
	const { chats, isLoading } = useSelector(state => state.chats);
	useEffect(() => {
		dispatch(fetchChats());
	}, [dispatch]);

	return (
		<Pane
			width="100%"
			height="65px"
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection="row"
			marginTop={100}
			padding={10}
			top="80px"
			zIndex={1}
		>
			{!isLoading ? (
				<Pane>
					{chats.map(chat => (
						<ChatItem chat={chat} />
					))}
				</Pane>
			) : (
				<Pane>Loading...</Pane>
			)}

		</Pane>
	);
};

export default ChatsList;
