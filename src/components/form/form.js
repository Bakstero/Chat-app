import styled, { css } from 'styled-components';

export const FormContainter = styled.div`
	width:100%;
	height:100%;
	display:flex;
	align-items:center;
	flex-direction:column;
	z-index:9999;
`;

export const HeaderForm = styled.div`
	padding: 0% 5% 0% 10%;
	width:100%;
	height:10vh;
	display: flex;
	align-items:center;
	justify-content: space-between;
	border-bottom: 1px solid black;
`;

export const TitleForm = styled.h2`
	color: ${({ theme }) => theme.colors.black};
`;

export const ErrorTitle = styled.p`
	color:${({ theme }) => theme.colors.error};
`;

export const Form = styled.form`
	width:100%;
	padding:10%;
	height:auto;
	display:flex;
	flex-direction:column;
`;

export const Input = styled.input`
    padding: 15px;
		margin: 20px 0px 20px 0px;
    font-size: 16px;
		background-color:${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
		border:none;
		border-radius:0;
		border-bottom: 1px solid ${({ theme }) => theme.colors.dark};
	&:focus {
      outline: none;
			border-bottom: 1px solid ${({ theme }) => theme.colors.primary};
    }
	${props => props.submit && css`
		background-color:${({ theme }) => theme.colors.white};
		cursor: pointer;
  `}
}
`;

export const FooterForm = styled.div`
	padding: 15px;
	width:100%;
	display: flex;
	flex-direction:column;
	align-items:center;
	justify-content: center;
	border-top: 1px solid black;
`;

export const CustomSubmit = styled.div`
	width: 80%;
	height: 50px;
	margin:10px;
	padding: 0% 10% 0% 10%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #3b5998;
	color:${({ theme }) => theme.colors.white};
	border-radius:5px;
	text-align:right;
	cursor: pointer;

	${props => props.google && css`
		background-color: #D44638;
	`}

	${props => props.exit && css`
		width: 50px;
		height: 50px;
		padding: 0%;
		justify-content: center;
		background-color:${({ theme }) => theme.colors.white};
		color:black;
  `}
`;
