import React from 'react'
import styled from 'styled-components';
import ChatsList from './chatsList';

const Wrapper = styled.div`
	position:fixed;
	width: 20%;
	min-height: 100vh;
	display: flex;
	flex-direction:column;
	align-items:center;
	background-color:${({theme}) => theme.color.white};

	left:0;
	top:0;
`;

const ChatContainer = () => {
	return (
		<Wrapper>
			<ChatsList/>
		</Wrapper>
	)
}

export default ChatContainer
