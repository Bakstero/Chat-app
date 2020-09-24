import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchChats } from '../../shared/chat/getChatSlice';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import ChatItem from './chatItem';
import styled from 'styled-components';

const Wrapper = styled(Link)`
	text-decoration: none;
	width: 100%;
	height: 100px;
	display: flex;
	align-items:center;
	justify-content:center;
`;

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
				<Wrapper>
					{chats.map(chat => (
						<ChatItem item={chat} key/>
					))}
				</Wrapper>
			) : (
				<div>Loading...</div>
			)}
		</div>
	);
};

export default ChatsList;
