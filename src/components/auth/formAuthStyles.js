import styled, { css } from 'styled-components';

export const FormContainter = styled.div`
	width:100%;
	height:100%;
	display:flex;
	align-items:center;
	flex-direction:column;
	z-index:9999;
`;

export const ErrorTitle = styled.p`
	color:${({ theme }) => theme.colors.error};
	margin:0;
	font-size: 10px;
`;

export const Form = styled.form`
	width:100%;
	padding:10%;
	height:auto;
	display:flex;
	flex-direction:column;
	@media ${({ theme }) => theme.device.mobileS} {
		padding:0%;
  }

	@media ${({ theme }) => theme.device.tablet} {
		padding: 10%;
  }

`;

export const Input = styled.input`
	padding: 15px;
	margin: 20px 0px 20px 0px;
	font-size: 16px;
	background-color:${({ theme }) => theme.colors.background};
	color: ${({ theme }) => theme.colors.primary};
	border:none;
	border-radius:0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
		transition: .3s;
	&:hover {
		transition: .3s;
		border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
		color: ${({ theme }) => theme.colors.primary};
	}
	&:focus {
		outline: none;
		border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
  }
	${props => props.submit && css`
		background-color:${({ theme }) => theme.colors.background};
		cursor: pointer;

		&:hover {
		transition: .3s;
		color: ${({ theme }) => theme.colors.primary};
	}
  `}
`;

export const FooterForm = styled.div`
	padding: 10px;
	width:100%;
	height:100%;
	display: flex;
	flex-direction:column;
	align-items:center;
	justify-content: center;
	background-color:${({ theme }) => theme.colors.background};
	border-top: 1px solid ${({ theme }) => theme.colors.border};

	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
		padding: 10px 0px 0px 0px;
		height:35%;
		justify-content: flex-start;
		border-top: none;
  }

	@media ${({ theme }) => theme.device.tablet} {
		width: 100%;
		height:100%;
		padding: 10px;
		border-top: 1px solid ${({ theme }) => theme.colors.border};
		align-items:center;
		justify-content: center;
  }
`;

export const CustomSubmit = styled.div`
	width: 100%;
	height: 50px;
	margin:10px;
	padding: 0% 10% 0% 10%;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	background-color: #3b5998;
	color:${({ theme }) => theme.colors.white};
	border-radius:5px;
	text-align:right;
	cursor: pointer;

	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
		border-radius:0px;
  }

	@media ${({ theme }) => theme.device.tablet} {
		border-radius:5px;
		width: 85%;
  }

	${props => props.google && css`
		background-color: #D44638;
	`}
`;

export const TextButton = styled.h3`
	margin-left:20px;
	padding: 0%;
	color:${({ theme }) => theme.colors.white};
	font-size:${({ theme }) => theme.fontSize.regular};
	font-weight: ${({ theme }) => theme.fontWeight.regular};
`;

export const MinimalistButton = styled.button`
	width: 100px;
	height: 35px;
	background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.textPrimary};
	border-radius: 5px;
	margin-right:20px;
	font-size:${({ theme }) => theme.fontSize.regular};
	cursor: pointer;
		&:focus {
    outline: none;
  }
		@media ${({ theme }) => theme.device.mobileS} {
		font-size:${({ theme }) => theme.fontSize.small};
		width: 65px;
		height: 25px;
		border-radius: 1px;
		margin-right:5px;
  }
		@media ${({ theme }) => theme.device.mobileM} {
		width: 75px;
		height: 25px;
		border-radius: 3px;
		margin-right:15px;
  }
	@media ${({ theme }) => theme.device.tablet} {
		width: 100px;
		height: 35px;
		border-radius: 5px;
  }


`;
