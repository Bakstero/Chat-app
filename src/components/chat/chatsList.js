import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChats } from '../../shared/chat/getChatSlice';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import ChatItem from './chatItem';

const ChatsList = () => {
	const dispatch = useDispatch();
	const { uid } = useSelector(selectCurrentUser);
	const { chats, isLoading } = useSelector(state => state.chats);
	useEffect(() => {
		dispatch(fetchChats(uid));
	}, [dispatch, uid]);

	return (
		<div>
			{!isLoading ? (
				<div>
					{chats.map(chat => (
						<ChatItem item={chat} key/>
					))}
				</div>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default ChatsList;
