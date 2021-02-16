import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../../shared/messages/getMessagesSlice';
import ScrollBottom from '../../helpers/scrollBottom';
import MessageItem from './messageItem';
import { ContainerMsgList } from './styleMessageItem';

const MessagesList = () => {
	const dispatch = useDispatch();
	const { messages, isLoading } = useSelector(state => state.messages);
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchMessages(id));
	}, [dispatch, id]);

	return (
		<>
			{isLoading ? (<h1>Loading Messages</h1>) : (
				<ContainerMsgList>
					{messages.map((message, index) => <MessageItem item={message} key={index} />)}
					<ScrollBottom />
				</ContainerMsgList>
			)}
		</>
	);
};

export default MessagesList;
