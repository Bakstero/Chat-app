import React from 'react';
import styled from 'styled-components';
import ChatsList from './chatsList';
import CreateChatForm from './createChatForm';
const Wrapper = styled.div`
	position:fixed;
	width: 20%;
	min-height: 100vh;
	display: flex;
	flex-direction:column;
	align-items:center;
	background-color:${({ theme }) => theme.colors.white};
	border-right: 1px solid ${({ theme }) => theme.colors.border};
	left:0;
	top:0;
`;

const ChatContainer = () => (
	<Wrapper>
		<CreateChatForm />
		<ChatsList/>
	</Wrapper>
);

export default ChatContainer;
