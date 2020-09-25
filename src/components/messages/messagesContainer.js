import React from 'react';
import styled from 'styled-components';
import MessagesList from './messagesList';
import CreateMessageForm from './createMessageForm';

const Wrapper = styled.div`
	margin-top:5vh;
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction:column;
	background-color:${({ theme }) => theme.colors.background};
	border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

const MessagesContainter = () => (
	<Wrapper>
		<MessagesList />
		<CreateMessageForm />
	</Wrapper>
);

export default MessagesContainter;
