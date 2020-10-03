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

	useEffect(() => dispatch(fetchMessages(id)), [dispatch, id]);
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
				<ContainerMsgList>
					{messages.map((message, index) => <MessageItem item={message} key={index} />)}
					<ScrollBottom />
				</ContainerMsgList>
			)}
		</>
	);
};

export default MessagesList;
