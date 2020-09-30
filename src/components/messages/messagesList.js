import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchMessages } from '../../shared/messages/getMessagesSlice';
import ScrollBottom from '../../helpers/scrollBottom';
import MessageItem from './messageItem';

const Wrapper = styled.div`
	width:100%;
	height: 90vh;
	padding: 2vh 0vh 6vh 0vh;
	overflow-y: auto;
	::-webkit-scrollbar-track {
		background-color: none;
		margin-bottom:5vh;
		margin-top:1vh;
	}
	::-webkit-scrollbar {
		width: 10px;
		background-color: none;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
		background-color: ${({ theme }) => theme.colors.white};
	}
`;

const MessagesList = () => {
	const dispatch = useDispatch();
	const { messages, isLoading } = useSelector(state => state.messages);
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchMessages(id));
	}, [dispatch, id]);
	/*
	const DeleteMessage = async (text, data) => {
		await db.collection('chat')
			.doc(id)
			.update({
				messages:
					dbUpdate.FieldValue.arrayRemove({
						user: name,
						userUid: uid,
						userAvatar: avatar,
						text,
						data,
					}),
			});
	};
	<button onClick={() => DeleteMessage(text, data)}>DeleteMessage</button>
	*/
	return (
		<>
			{isLoading ? (<h1>Loading Messages</h1>) : (
				<Wrapper>
					{messages.map((message, index) => <MessageItem item={message} key={index} />)}
					<ScrollBottom />
				</Wrapper>
			)}
		</>
	);
};

export default MessagesList;
