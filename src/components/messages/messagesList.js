import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from '../../shared/messages/getMessagesSlice';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import { db, dbUpdate } from '../../services/firebase';
import ScrollBottom from '../../utils/scrollBottom';

const MessagesList = () => {
	const { name, uid, avatar } = useSelector(selectCurrentUser);
	const dispatch = useDispatch();
	const { messages, isLoading } = useSelector(state => state.messages);
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchMessages(id));
	}, [dispatch, id]);

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

	return (
		<div>
			{isLoading ? (<h1>Loading Messages</h1>) : (
				<div>
					{messages.map(({
						user, userUid, userAvatar, text, data,
					}, keyId) => <div key={keyId}>
						<p>{text}</p >
						<img src={userAvatar} alt={user} />
						<button onClick={() => DeleteMessage(text, data)}>DeleteMessage</button>
					</div>)
					}
				</div>
			)
			}
			<ScrollBottom />
		</div>
	);
};

export default MessagesList;
