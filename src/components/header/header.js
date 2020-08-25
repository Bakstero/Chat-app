import React from 'react';
import { Link } from 'react-router-dom';
import { Pane, Text } from 'evergreen-ui';
import useAuthUser from '../../hooks/useAuthUser';
import UserLogin from '../../features/auth/login';
import RegisterUser from '../../features/auth/register';
import UserAccount from './userMenu/userMenu';

const Header = () => {
	const currentUser = useAuthUser();

	return (
		<Pane
			width="100%"
			height="70px"
			background="tint2"
			position="fixed"
			top={0}
			zIndex={2}
		>
			<Pane
				padding={20}
				width="100%"
				height="100%"
				display="flex"
				alignItems="center"
				flexDirection="row"
				justifyContent="space-between"
			>
				<Link to="/">
					<Text size={700}>CHATLY</Text>
				</Link>
				{currentUser ? (
					<UserAccount />
				) : (
					<Pane
						display="flex"
						flexDirection="row"
					>
						<RegisterUser />
						<UserLogin />
					</Pane>
				)}
			</Pane>
			<Pane
				padding={20}
				width="100%"
				height="100%"
				display="flex"
				alignItems="center"
				flexDirection="row"
				justifyContent="space-between"
			>
			</Pane>
		</Pane>
	);
};

export default Header;
