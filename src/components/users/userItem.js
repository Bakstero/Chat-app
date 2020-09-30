import React from 'react';
import { Link } from 'react-router-dom';
import styled, {css} from 'styled-components';

const Wrapper = styled(Link)`
	text-decoration: none;
	min-width: 60px;
	height: 100%;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	margin: 0px 19px 0px 19px;
`;

const UserAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 12px;
`;

const UserName = styled.span`
	text-align: center;
	color:${({ theme }) => theme.colors.black};
	font-weight:${({ theme }) => theme.fontWeight.regular};
	font-size:${({ theme }) => theme.fontSize.small};
`;

const Container = styled.div`
	width: 50px;
	height: 50%;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	${props => props.text && css`
		@media ${({ theme }) => theme.device.mobileS} {
			display: none;
		}
		@media ${({ theme }) => theme.device.laptop} {
			display: flex;
		}
	`}
`;

const UserItem = ({ userItem: { id, name, avatar } }) => (
	<Wrapper to={`/user/${id}`}>
		<Container>
			<UserAvatar src={avatar} alt='' />
		</Container>
		<Container text>
			<UserName >{name}</UserName>
		</Container>
	</Wrapper>
);

export default UserItem;
