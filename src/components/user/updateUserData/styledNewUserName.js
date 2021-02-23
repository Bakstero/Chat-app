import styled from 'styled-components';

export const Wrapper = styled.div`
	bottom:0;
	width: 100%;
	height:100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction:column;
	padding: 7px;
	background-color:${({ theme }) => theme.colors.scdBackground};
	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
		margin:0;
		position:fixed;
		height:30vh;
		padding: 14px;
  }
	@media ${({ theme }) => theme.device.mobileL} {
		height:20vh;
  }
	@media ${({ theme }) => theme.device.tablet} {
		width: 60%;
		margin-left:0%;
		position:static;
  }
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;
	display:flex;
	align-items: center;
	justify-content:space-between;
`;

export const H1 = styled.h1`
	color: ${({ theme }) => theme.colors.textPrimary};
`;

export const FormInput = styled.input`
	width: 100%;
	height: 100%;
	border-radius: 4px;
	border:none;
	padding-left:10px;
	color: ${({ theme }) => theme.colors.textPrimary};
	background-color:${({ theme }) => theme.colors.background};
	&:focus {
    outline: none;
  }
	@media ${({ theme }) => theme.device.mobileS} {
	margin-left:3%;
		height: 35px;
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
