import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
	AiOutlineUser, AiOutlineEdit, AiOutlineSetting, AiOutlineLogout,
} from 'react-icons/ai';
import { selectCurrentUser } from '../../../shared/auth/authSlice';
import { logout } from '../../../services/authProviders';
import Popup from '../../popup';
import { CloseModal } from '../../../helpers/closeModal';

const UserAvatar = styled.img`
	width: 30px;
	height: 30px;
	border-radius:50%;
	cursor:pointer;
	${({ clicked }) => clicked && css`
		border: 2px solid black;
	`}
		@media ${({ theme }) => theme.device.mobileS} {
  	width: 20px;
		height: 20px;
  }
	@media ${({ theme }) => theme.device.tablet} {
		width: 30px;
		height: 30px;
  }
`;

const UserMenuWrapper = styled.div`
	display: flex;
	align-items:center;
	justify-content: center;
	flex-direction:column;
`;

const Item = styled(Link)`
	display: flex;
	align-items:center;
	justify-content:center;
	text-decoration:none;
	width:100%;
	height:25%;
	&:hover {
		background-color:${({ theme }) => theme.colors.background};
	}
	${props => props.lastItem && css`
		border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  `}
`;

const Container = styled.div`
	width:100%;
	height:100%;
	display: flex;
	align-items: center;
	padding: 8px 16px 8px 16px;
	color:${({ theme }) => theme.colors.black};
	font-weight:${({ theme }) => theme.fontWeight.regular};
	font-size:${({ theme }) => theme.fontSize.regular};
`;

const ProfileIcon = styled(AiOutlineUser)`
	width:20px;
	height:20px;
	margin-right: 10px;
`;

const EditIcon = styled(AiOutlineEdit)`
	width:20px;
	height:20px;
	margin-right: 10px;
`;

const SettingsIcon = styled(AiOutlineSetting)`
	width:20px;
	height:20px;
	margin-right: 10px;
`;

const LogoutIcon = styled(AiOutlineLogout)`
	width:20px;
	height:20px;
	margin-right: 10px;
`;

const UserMenu = () => {
	const { avatar, uid } = useSelector(selectCurrentUser);
	const [popup, openPopup] = useState(false);
	return (
		<UserMenuWrapper>
			<UserAvatar clicked={popup} onClick={() => openPopup(true)} src={avatar}/>
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
