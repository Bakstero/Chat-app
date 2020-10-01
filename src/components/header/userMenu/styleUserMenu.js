import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
	AiOutlineUser, AiOutlineEdit, AiOutlineSetting, AiOutlineLogout,
} from 'react-icons/ai';

export const UserAvatar = styled.img`
	cursor:pointer;
	width: 30px;
	height: 30px;
	border-radius: 8px;
	${({ clicked }) => clicked && css`
		border: 2px solid ${({ theme }) => theme.colors.border};
	`}
`;

export const UserMenuWrapper = styled.div`
	display: flex;
	align-items:center;
	justify-content: center;
	flex-direction:column;
`;

export const Item = styled(Link)`
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

export const Container = styled.div`
	width:100%;
	height:100%;
	display: flex;
	align-items: center;
	padding: 8px 16px 8px 16px;
	color: ${({ theme }) => theme.colors.textPrimary};
	font-weight:${({ theme }) => theme.fontWeight.regular};
	font-size:${({ theme }) => theme.fontSize.regular};
`;

export const ProfileIcon = styled(AiOutlineUser)`
	width:20px;
	height:20px;
	margin-right: 10px;
`;

export const EditIcon = styled(AiOutlineEdit)`
	width:20px;
	height:20px;
	margin-right: 10px;
`;

export const SettingsIcon = styled(AiOutlineSetting)`
	width:20px;
	height:20px;
	margin-right: 10px;
`;

export const LogoutIcon = styled(AiOutlineLogout)`
	width:20px;
	height:20px;
	margin-right: 10px;
`;
