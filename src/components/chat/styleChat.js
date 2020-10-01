import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';

// ? Chat Container --------------------------------------------------------------------------------

export const ChatContainerWrapper = styled.div`
	padding-top:5vh;
	position:fixed;
	width: 20%;
	height: 100%;
	display: flex;
	flex-direction:column;
	align-items:center;
	background-color:${({ theme }) => theme.colors.background};
	border-right: 1px solid ${({ theme }) => theme.colors.border};
	left:0;
	top:0;

	@media ${({ theme }) => theme.device.mobileS} {
		position:relative;
		padding-top:0vh;
		width: 100%;
		align-items:flex-start;
		justify-content:flex-start;
		border-right: none;
  }
	@media ${({ theme }) => theme.device.tablet} {
		position:fixed;
		width: 20%;
		padding-top:5vh;
		border-right: 1px solid ${({ theme }) => theme.colors.border};
  }

	${props => props.Mobile && css`;
	@media ${({ theme }) => theme.device.mobileS} {
		display: none;
  }
	@media ${({ theme }) => theme.device.tablet} {
		position:fixed;
		width: 20%;
		display: flex;
		flex-direction:column;
		align-items:center;
  }
	`}
`;

// ? chat Header -----------------------------------------------------------------------------------

export const ChatHeaderContainer = styled.div`
	text-decoration:none;
	width: 95%;
	height: 75px;
	margin-top:10px;
	padding: 5px;
	border-radius: 10px;
	display: flex;
	align-items:center;
	justify-content: flex-start;

${props => props.title && css`
		justify-content: space-between;
  `}
`;

export const NewChatIcon = styled(AiOutlineEdit)`
	width: 35px;
	height: 35px;
	fill: ${({ theme }) => theme.colors.formLine};
`;

// ? Chat List

export const ChatListContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction:column;
	align-items:center;
`;

// ? Chat Item -------------------------------------------------------------------------------------

export const ChatAvatar = styled.img`
	border-radius: 12px;
	width: 50px;
	height: 50px;
`;

export const ChatContainer = styled(Link)`
	text-decoration:none;
	width: 95%;
	height: 75px;
	margin-top:10px;
	padding: 5px;
	border-radius: 10px;
	display: flex;
	align-items:center;
	justify-content: flex-start;

${props => props.title && css`
		justify-content: center;
		width: 35px;
		height: 35px;
  `}
`;

export const ChatTitle = styled.p`
	color:${({ theme }) => theme.colors.textPrimary};
	margin-left: 15px;

${props => props.title && css`
		color:${({ theme }) => theme.colors.textPrimary};
		font-size:${({ theme }) => theme.fontSize.title};
		font-weight:${({ theme }) => theme.fontWeight.bold};
		margin-left:5px;
  `}
`;
