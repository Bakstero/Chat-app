import styled from 'styled-components';

export const NewMsgWrapper = styled.div`
	bottom:0;
	width: 100%;
	height:5vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 7px;
	background-color:${({ theme }) => theme.colors.primary};
	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
		margin:0;
		position:fixed;
		height:10vh;
		padding: 14px;
  }
	@media ${({ theme }) => theme.device.laptop} {
		width: 100%;
		margin-left:0%;
		position:static;
		height:5vh;
		padding: 7px;
  }
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;
	display:flex;
	align-items: center;
	justify-content:space-between;
`;

export const FormInput = styled.input`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	border:none;
	padding-left:10px;
	margin-left:30%;
	color: ${({ theme }) => theme.colors.textPrimary};
	background-color:${({ theme }) => theme.colors.background};
	&:focus {
    outline: none;
  }
	@media ${({ theme }) => theme.device.mobileS} {
	margin-left:3%;
  }
	@media ${({ theme }) => theme.device.laptop} {
		margin-left:30%;
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
