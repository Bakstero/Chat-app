import React from 'react';
import styled, { css } from 'styled-components';
import Timestamp from 'react-timestamp';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../shared/auth/authSlice';

const ChatAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const Container = styled.div`
	width: 100%;
	height: 10%;
	padding: 10px;
	margin: 10px 0px 10px 0px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const MessageContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${props => props.otherUser && css`
		justify-content: flex-start;
	`}
`;

export const MessageText = styled.p`

`;

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
							<Timestamp relative date={data} autoUpdate />
							<MessageText>{text}</MessageText>
							<ChatAvatar src={userAvatar} alt={user} />
						</MessageContainer>
					</Container>
				) : (
					<Container >
						<MessageContainer otherUser>
							<ChatAvatar src={userAvatar} alt={user} />
							<MessageText>{text}</MessageText>
							<Timestamp relative date={data} autoUpdate />
						</MessageContainer>
					</Container>
				)
			}
		</>
	);
};
export default MessageItem;
