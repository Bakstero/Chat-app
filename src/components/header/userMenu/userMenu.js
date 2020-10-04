import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../shared/auth/authSlice';
import { logout } from '../../../services/authProviders';
import Popup from '../../popup';
import { CloseModal } from '../../../helpers/closeModal';
import {
	UserAvatar,
	UserMenuWrapper,
	ProfileIcon,
	EditIcon,
	SettingsIcon,
	LogoutIcon,
} from './styleUserMenu';
import { Item, Logout } from './userMenuItem';

const UserMenu = () => {
	const defaultAvatar = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
	const { avatar, uid } = useSelector(selectCurrentUser);
	const [popup, openPopup] = useState(false);
	return (
		<UserMenuWrapper>
			{avatar !== null
				?	<UserAvatar clicked={popup} onClick={() => openPopup(true)} src={avatar} />
				: <UserAvatar clicked={popup} onClick={() => openPopup(true)} src={defaultAvatar} />
			}
			<Popup open={popup}>

				<Item
					link={`/user/${uid}`}
					title='Profile'>
					<ProfileIcon/>
				</Item>

				<Item
					link='/edit'
					title='Edit'>
					<EditIcon />
				</Item>

				<Item
					link='/settings'
					title='Settings'>
					<SettingsIcon />
				</Item>

				<Logout logout={() => logout()}
					title='Logout'>
					<LogoutIcon />
				</Logout>

				<CloseModal onClick={() => openPopup(false)} />
			</Popup>
		</UserMenuWrapper>
	);
};

export default UserMenu;
