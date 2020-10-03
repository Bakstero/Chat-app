import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../../../shared/auth/authSlice';
import { logout } from '../../../services/authProviders';
import Popup from '../../popup';
import { CloseModal } from '../../../helpers/closeModal';
import {
	UserAvatar,
	UserMenuWrapper,
	Item,
	Container,
	ProfileIcon,
	EditIcon,
	SettingsIcon,
	LogoutIcon,
} from './styleUserMenu';

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
				<Item to={`/user/${uid}`}>
					<Container>
						<ProfileIcon/>
						Profile
					</Container>
				</Item>
				<Item to={`/edit/${uid}`}>
					<Container>
						<EditIcon />
						Edit
					</Container>
				</Item>
				<Item lastItem to={`/settings/${uid}`}>
					<Container>
						<SettingsIcon />
						Settings
					</Container>
				</Item>
				<Item onClick={() => logout()}>
					<Container>
						<LogoutIcon />
						Logout
					</Container>
				</Item>
				<CloseModal onClick={() => openPopup(false)} />
			</Popup>
		</UserMenuWrapper>
	);
};

export default UserMenu;

/*
const buttons = ['facebook', 'twitter', 'youtube'];

return (
  <div>
    {
      buttons.map( (button) => {
        return (
          <IconButton
            onClick={doStuff( button )}
            iconClass={button}
          />
        );
      } )
    }
  </div>
);

let listArr = [{
    itemId: 1,
    link: `http://google.com`,
},
{
    itemId: 2,
    link: `http://yahoo.com`,
}
...,
{
    itemId: 3,
    link: `http://disney.com`
}]

listArr.map((item, index)=>(
    //A true ID given the data
    <li key={item.itemId}>{item.link}</li>
))
https://americanexpress.io/clean-code-dirty-code/
*/
