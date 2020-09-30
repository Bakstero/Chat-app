import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Header from '../components/header/header';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
	body {
		padding:0;
		margin:0;
		font-family: 'Montserrat';
		color: ${({ theme }) => theme.colors.textPrimary};
	}

	*, *::before, *::after {
		box-sizing: border-box;
	}
`;

const StyledWrapper = styled.div`
	height: 100%;
	width:100%;
	display: flex;
	flex-direction: column;
	align-items:center;
	background: ${({ theme }) => theme.colors.background};
	position: relative;
`;

const Layout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<>
			<GlobalStyle />
			<StyledWrapper>
				<Header />
				{children}
			</StyledWrapper>
		</>
	</ThemeProvider>
);

export default Layout;
