import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { fetchChats } from '../../shared/chat/getChatSlice';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import ChatItem, { ChatTitle, ChatContainer } from './chatItem';

const Wrapper = styled.div`
	width: 100%;
	min-height: 100vh;
	display: flex;
	flex-direction:column;
	align-items:center;
`;
const NewChatAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	filter: brightness(50%);
`;

const ChatsList = () => {
	const dispatch = useDispatch();
	const { uid } = useSelector(selectCurrentUser);
	const { chats, isLoading } = useSelector(state => state.chats);
	const avatar = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
	useEffect(() => {
		dispatch(fetchChats(uid));
	}, [dispatch, uid]);

	return (
		<Wrapper>
			{!isLoading ? (
				<>
					<ChatContainer to={`/new/chat`}><NewChatAvatar src={avatar} /><ChatTitle>Create new chat</ChatTitle> </ChatContainer>
					{chats.map((chat, index) => (
						<ChatItem item={chat} key={index}/>
					))}
				</>
			) : (
				<div>Loading...</div>
			)}
		</Wrapper>
	);
};

export default ChatsList;
