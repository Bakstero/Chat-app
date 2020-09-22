import styled, { css } from 'styled-components';

export const Button = styled.button`
	width: 100px;
	height: 35px;
	background-color: ${({ theme }) => theme.colors.background};
	border-radius: 5px;
	border:none;
	margin:10px;
	cursor: pointer;
		&:focus {
    outline: none;
  }
${props => props.primary && css`
		background-color: ${({ theme }) => theme.colors.primary};
  `}
`;
