import React from 'react';
import { Link } from 'react-router-dom';
import useAuthUser from '../../hooks/useAuthUser';
import UserLogin from '../form/login';
import RegisterUser from '../form/register';
import UserMenu from './userMenu/userMenu';
import {
	Wrapper, Nav, AuthDiv, TextLogo,
} from './headerStyles';

const Header = () => {
	const currentUser = useAuthUser();

	return (
		<Wrapper>
			<Nav>
				<Link to="/">
					<TextLogo />
				</Link>
				{currentUser ? (
					<UserMenu />
				) : (
					<AuthDiv>
						<RegisterUser />
						<UserLogin />
					</AuthDiv>
				)}
			</Nav>
		</Wrapper>
	);
};

export default Header;
