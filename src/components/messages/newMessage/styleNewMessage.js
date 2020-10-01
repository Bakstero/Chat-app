import styled from 'styled-components';

export const NewMsgWrapper = styled.div`
	bottom:0;
	width: 100%;
	height:5vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	background-color:${({ theme }) => theme.colors.scdBackground};
	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
		margin:0;
		position:fixed;
		height:10vh;
  }
	@media ${({ theme }) => theme.device.laptop} {
		width: 100%;
		margin-left:0%;
		position:static;
		height:5vh;
  }
`;

export const Button = styled.button`
	width: 100px;
	height: 35px;
	color:${({ theme }) => theme.colors.textPrimary};
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 5px;
	border:none;
	margin:10px;
	cursor: pointer;
		&:focus {
    outline: none;
  }
`;
