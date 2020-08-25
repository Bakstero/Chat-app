import React from 'react';
import { useSelector } from 'react-redux';
import {
	Avatar, Position, Popover, Menu, PeopleIcon, EditIcon, LogOutIcon,
} from 'evergreen-ui';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../../../features/auth/authSlice';
import { logout } from '../../../services/authProviders';

const UserAccount = () => {
	const currentUser = useSelector(selectCurrentUser);

	return (
		<div>
			<Popover
				position={Position.BOTTOM_LEFT}
				content={
					<Menu>
						<Menu.Group>
							<Link style={{ textDecoration: 'none' }} to={`/${currentUser.uid}`} ><Menu.Item icon={PeopleIcon}>Profile</Menu.Item></Link>
							<Link style={{ textDecoration: 'none' }} to={`/edit/${currentUser.uid}`} ><Menu.Item icon={EditIcon}>Edit</Menu.Item></Link>
						</Menu.Group>
						<Menu.Divider />
						<Menu.Group>
							<Menu.Item icon={LogOutIcon} intent="danger" onSelect={() => logout()}>
								Logout
        			</Menu.Item>
						</Menu.Group>
					</Menu>
				}
			>
				<Avatar cursor='pointer' src={currentUser.avatar} name={currentUser.name} size={40} />
			</Popover>
		</div>
	);
};

export default UserAccount;
