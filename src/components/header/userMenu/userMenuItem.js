import React from 'react';
import {
	Container, ItemStyle, ItemTitle,
} from './styleUserMenu';

export const Item = ({ title, link, children }) => (
	<ItemStyle to={`${link}`}>
		<Container>
			{children}
			<ItemTitle>{title}</ItemTitle>
		</Container>
	</ItemStyle>
);

export const Logout = ({ title, children, logout }) => (
	<ItemStyle lastItem onClick={logout} >
		<Container>
			{children}
			<ItemTitle>{title}</ItemTitle>
		</Container>
	</ItemStyle>
);
