import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as LogoText } from '../../images/logo/LogoText.svg';
import useAuthUser from '../../hooks/useAuthUser';
import UserLogin from '../form/login';
import RegisterUser from '../form/register';
import UserMenu from './userMenu/userMenu';

const Wrapper = styled.header`
	width: 100%;
	height: 6vh;
	background-color:${({ theme }) => theme.colors.white} ;
	position:fixed;
	z-index:999;
	top:0;
	border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const Nav = styled.div`
	width: 100%;
	height:100%;
	display: flex;
	flex-direction:row;
	justify-content: space-around;
	align-items: center;
	padding: 0px 50px 0px 50px;
		@media ${({ theme }) => theme.device.mobileL} {
	justify-content: space-between;
		padding: 0px 10px 0px 10px;
  }
`;

const AuthDiv = styled.div`
	display: flex;
	width: 20%;
	flex-direction:row;
	justify-content: center;
	align-items: center;
`;

const TextLogo = styled(LogoText)`
	width: 200px;
	height: 40px;
	@media ${({ theme }) => theme.device.mobileL} {
  	width: 150px;
		height: 30px;
  }
	@media ${({ theme }) => theme.device.mobileS} {
  	width: 100px;
		height: 20px;
  }
`;

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
