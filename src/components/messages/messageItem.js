import React from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import {
	Container, MessageContainer, MessageText, ChatAvatar,
} from './styleMessageItem';

const MessageItem = ({
	item: {
		user, userUid, userAvatar, text, data,
	},
}) => {
	const { uid } = useSelector(selectCurrentUser);

	return (
		<>
			{userUid === uid
				? (
					<Container>
						<MessageContainer>
							<MessageText>{text}</MessageText>
						</MessageContainer>
					</Container>
				) : (
					<Container otherUser >
						<ChatAvatar src={userAvatar} alt={user} />
						<MessageContainer otherUser>
							<MessageText>{text}</MessageText>
						</MessageContainer>
					</Container>
				)
			}
		</>
	);
};
export default MessageItem;
