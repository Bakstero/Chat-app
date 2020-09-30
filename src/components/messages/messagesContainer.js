import React from 'react';
import styled from 'styled-components';
import MessagesList from './messagesList';
import CreateMessageForm from './createMessageForm';

const Wrapper = styled.div`
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction:column;
	background-color:${({ theme }) => theme.colors.background};
	border-right: 1px solid ${({ theme }) => theme.colors.border};
	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
  }
	@media ${({ theme }) => theme.device.tablet} {
		width: 60%;
  }
`;

const MessagesContainter = () => (
	<Wrapper>
		<MessagesList />
		<CreateMessageForm />
	</Wrapper>
);

export default MessagesContainter;
