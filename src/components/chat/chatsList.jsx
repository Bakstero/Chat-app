import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChats } from '../../shared/chat/getChatSlice';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import ChatItem from './chatItem';
import { ChatListContainer } from './styleChat';
import ChatListHeader from './chatListHeader';

const ChatsList = () => {
	const dispatch = useDispatch();
	const { uid } = useSelector(selectCurrentUser);
	const { chats, isLoading } = useSelector(state => state.chats);
	useEffect(() => {
		dispatch(fetchChats(uid));
	}, [dispatch, uid]);

	return (
		<ChatListContainer>
			{!isLoading ? (
				<>
					<ChatListHeader />
					{chats.map((chat, index) => (
						<ChatItem item={chat} key={index}/>
					))}
				</>
			) : (
				<div>Loading...</div>
			)}
		</ChatListContainer>
	);
};

export default ChatsList;
