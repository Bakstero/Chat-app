import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fetchChats } from '../../shared/chat/getChatSlice';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import ChatItem from './chatItem';

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction:column;
	align-items:center;
`;

const ChatsList = () => {
	const dispatch = useDispatch();
	const { uid } = useSelector(selectCurrentUser);
	const { chats, isLoading } = useSelector(state => state.chats);
	useEffect(() => {
		dispatch(fetchChats(uid));
	}, [dispatch, uid]);

	return (
		<Wrapper>
			{!isLoading ? (
				<>
					{chats.map(chat => (
						<ChatItem item={chat} key/>
					))}
				</>
			) : (
				<div>Loading...</div>
			)}
		</Wrapper>
	);
};

export default ChatsList;
