import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// ? Users List ------------------------------------------------------------------------------------

export const UserListWrapper = styled.div`
	margin-top: 10vh;
	display: flex;
	width: 60%;
	height: 100px;

	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
		padding-left: 0%;
		height: 100px;
  }
	@media ${({ theme }) => theme.device.tablet} {
		width: 60%;
		margin-top: 7vh;
		height: 100px;
  }
`;

export const UserListContainer = styled.div`
	display: flex;
	width:100%;
	height: 100%;
	overflow: overlay;
`;

// ? User Item -------------------------------------------------------------------------------------

export const ItemWrapper = styled(Link)`
	text-decoration: none;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	border-radius:12px;
	transition: 0.4s;
	border: 1px solid ${({ theme }) => theme.colors.scdBackground};

	&:hover {
		transition: 0.4s;
		border: 1px solid ${({ theme }) => theme.colors.primary};
	}
	@media ${({ theme }) => theme.device.mobileS} {
		margin:0px;
  }
	@media ${({ theme }) => theme.device.tablet} {
		margin:0px 5px 0px 5px;
  }
`;

export const UserAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 12px;
`;

export const UserName = styled.span`
	text-align: center;
	color:${({ theme }) => theme.colors.textPrimary};
	font-weight:${({ theme }) => theme.fontWeight.regular};
	font-size:${({ theme }) => theme.fontSize.small};
`;

export const ItemContainer = styled.div`
	width: 100px;
	height: 70%;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;

	${props => props.text && css`
		@media ${({ theme }) => theme.device.mobileS} {
			display: none;
			height: 30%;
		}
		@media ${({ theme }) => theme.device.laptop} {
			display: flex;
		}
	`}
`;
