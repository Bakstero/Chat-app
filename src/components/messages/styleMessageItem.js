import styled, { css } from 'styled-components';

// ? Messages Container ----------------------------------------------------------------------------

export const MessagesContainer = styled.div`
	width: 60%;
	display: flex;
	flex-direction:column;
	background-color:${({ theme }) => theme.colors.scdBackground};
	border-right: 1px solid ${({ theme }) => theme.colors.border};
	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
  }
	@media ${({ theme }) => theme.device.tablet} {
		width: 60%;
  }
`;

// ? Messages List ---------------------------------------------------------------------------------

export const ContainerMsgList = styled.div`
	width:100%;
	height: 90vh;
	padding-top:10vh;
	overflow-y: auto;
	::-webkit-scrollbar-track {
		background-color: none;
		margin-top:6vh;
	}

	::-webkit-scrollbar {
		width: 10px;
		background-color: none;
	}
	::-webkit-scrollbar-thumb {
		border-radius: 10px;
		-webkit-box-shadow: inset 0 0 6px ${({ theme }) => theme.colors.scrollBorder};
		background-color: ${({ theme }) => theme.colors.scrollbarColor};
	}
	@media ${({ theme }) => theme.device.mobileS} {
		height: auto;
		margin-bottom:10vh;
  }
	@media ${({ theme }) => theme.device.tablet} {
		height: 95vh;
		margin-bottom:0vh;
	}
  }
`;

// ? Messages Item ---------------------------------------------------------------------------------

export const ChatAvatar = styled.img`
	width: 20px;
	height: 20px;
	border-radius: 8px;
`;

export const Container = styled.div`
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

export const MessageContainer = styled.div`
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
