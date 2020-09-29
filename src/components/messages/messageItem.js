import React from 'react';
import styled, { css } from 'styled-components';
import Timestamp from 'react-timestamp';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../shared/auth/authSlice';

const ChatAvatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
`;

const Container = styled.div`
	width: 100%;
	height: auto;
	padding: 10px;
	margin: 10px 0px 10px 0px;
	display: flex;
	align-items: flex-end;
	justify-content: flex-end;
		${props => props.otherUser && css`
		justify-content: flex-start;
	`}
`;

const MessageContainer = styled.div`
	max-width: 80%;
	margin: 0px 10px 0px 10px;
	padding: 15px;
	border-radius: 10px;
	background-color:${({ theme }) => theme.colors.primary};
	display: flex;
	align-items: center;
	justify-content: flex-end;

	${props => props.otherUser && css`
		background-color:${({ theme }) => theme.colors.secoundary};
	`}
`;

export const MessageText = styled.p`
	width: fil-content;
	text-align: left;
	margin:0px;
	color: ${({ theme }) => theme.colors.white};
	fontSize: 14px;
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
