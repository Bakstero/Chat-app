import React from 'react';
import styled, { css } from 'styled-components';
import ChatsList from './chatsList';

const Wrapper = styled.div`
	padding-top:5vh;
	position:fixed;
	width: 20%;
	min-height: 100vh;
	display: flex;
	flex-direction:column;
	align-items:center;
	background-color:${({ theme }) => theme.colors.background};
	border-right: 1px solid ${({ theme }) => theme.colors.border};
	left:0;
	top:0;

	@media ${({ theme }) => theme.device.mobileS} {
		position:relative;
		padding-top:5vh;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction:column;
		align-items:flex-start;
		justify-content:flex-start;
		background-color:${({ theme }) => theme.colors.background};
  }
	@media ${({ theme }) => theme.device.tablet} {
		padding-top:5vh;
		position:fixed;
		width: 20%;
		min-height: 100vh;
		display: flex;
		flex-direction:column;
		align-items:center;
		background-color:${({ theme }) => theme.colors.background};
		border-right: 1px solid ${({ theme }) => theme.colors.border};
		left:0;
		top:0;
  }

	${props => props.Mobile && css`;
	@media ${({ theme }) => theme.device.mobileS} {
		display: none;
  }
	@media ${({ theme }) => theme.device.tablet} {
		padding-top:5vh;
		position:fixed;
		width: 20%;
		min-height: 100vh;
		display: flex;
		flex-direction:column;
		align-items:center;
		background-color:${({ theme }) => theme.colors.background};
		border-right: 1px solid ${({ theme }) => theme.colors.border};
		left:0;
		top:0;
  }
	`}
`;

export const ChatContainerOffMobile = () => (
	<Wrapper Mobile>
		<ChatsList/>
	</Wrapper>
);

export const ChatContainer = () => (
	<Wrapper>
		<ChatsList />
	</Wrapper>
);
