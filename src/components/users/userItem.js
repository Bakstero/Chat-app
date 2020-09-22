import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled(Link)`
	text-decoration: none;
	min-width: 60px;
	height: 100%;
	display:flex;
	flex-direction: column;
	align-items:center;
	justify-content:center;
	margin: 0px 15px 0px 15px;
`;

const UserAvatar = styled.img`
	width: 40px;
	height: 40px;
	border-radius: 50%;
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
`;

const UserItem = ({ user: { id, name, avatar } }) => (
	<Wrapper to={`/user/${id}`}>
		<Container>
			<UserAvatar src={avatar} alt='' />
		</Container>
		<Container>
			<UserName>{name}</UserName>
		</Container>
	</Wrapper>
);

export default UserItem;
