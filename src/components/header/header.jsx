import React from 'react';
import { Link } from 'react-router-dom';
import useAuthUser from '../../hooks/useAuthUser';
import SignInUser from '../auth/signInUser';
import SignupUser from '../auth/signUpUser';
import UserMenu from './userMenu/userMenu';
import {
	Wrapper, Nav, AuthDiv, TextLogo,
} from './styleHeader';
import * as ROUTE from '../../routes/routes';

const Header = () => {
	const currentUser = useAuthUser();
	return (
		<Wrapper>
			<Nav>
				<Link to={ROUTE.HOME}>
					<TextLogo />
				</Link>
				{currentUser ? (
					<UserMenu />
				) : (
					<AuthDiv>
						<SignupUser />
						<SignInUser />
					</AuthDiv>
				)}
			</Nav>
		</Wrapper>
	);
};

export default Header;
