import styled from 'styled-components';

export const Wrapper = styled.div`
	top:50px;
	right: 0;
	position:fixed;
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
		width: 20%;
		margin-left:0%;
		position:fixed;
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
	border: 1px solid ${({ theme }) => theme.colors.primary};
	padding-left:10px;
	background-color:${({ theme }) => theme.colors.scdBackground};

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
	color:${({ theme }) => theme.colors.white};
	background-color: ${({ theme }) => theme.colors.primary};
	border-radius: 5px;
	border:none;
	margin:10px;
	cursor: pointer;
		&:focus {
    outline: none;
  }
`;
