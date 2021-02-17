import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllUser } from '../../../shared/users/getUsersSlice';
import UserAuthItem from './userAuthItem';
import { selectCurrentUser } from '../../../shared/auth/authSlice';

const Wrapper = styled.div`
	width:100%;
	height:100%;
	background-color: ${({ theme }) => theme.colors.background};
`;

const ChatAuthUsers = () => {
	const users = useSelector(selectAllUser);
	const { uid } = useSelector(selectCurrentUser);
	return (
		<Wrapper>
			{users.map((user, index) => <>
				{user.uid !== uid && <UserAuthItem userItem={user} key={index} />}
			</>)}
		</Wrapper>
	);
};

export default ChatAuthUsers;
