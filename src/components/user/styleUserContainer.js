import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	width:60%;
	height:100%;
	display:flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	@media ${({ theme }) => theme.device.mobileS} {
 		margin-top: 12vh;
		width:100%;
  }
	@media ${({ theme }) => theme.device.mobileM} {
 		margin-top: 10vh;
  }
	@media ${({ theme }) => theme.device.tablet} {
 		margin-top: 8vh;
		width:60%;
  }
	@media ${({ theme }) => theme.device.laptop} {
 	margin-top: 9vh;
  }
	@media ${({ theme }) => theme.device.laptopL} {
 	margin-top: 8vh;
  }
	@media ${({ theme }) => theme.device.desktop} {
 	margin-top: 6vh;
  }
`;

export const UserAvatar = styled.img`
	width:250px;
	height:250px;
	border-radius: 12px;
`;

export const UserInformations = styled.h3`
	font-size: ${({ theme }) => theme.fontSize.large};
	color: ${({ theme }) => theme.colors.textPrimary};
	${props => props.Name && css`;
		font-size: ${({ theme }) => theme.fontSize.title};
	`}
`;

export const NewChatButton = styled.button`
width:250px;
height: 35px;
border: none;
color: ${({ theme }) => theme.colors.textPrimary};
background-color: ${({ theme }) => theme.colors.scdBackground};
border: 1px solid ${({ theme }) => theme.colors.border};
border-radius: 5px;
margin: 10px;
cursor: pointer;
&: focus {
	outline: none;
}
&: hover {
	border: 1px solid ${({ theme }) => theme.colors.primary};
}

`;
