import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectAllUser } from '../../../shared/users/getUsersSlice';
import UserAuthItem from './userAuthItem';

const Wrapper = styled.div`
	width:100%;
	height:100%;
	background-color: ${({ theme }) => theme.colors.scdBackgdound}
	display: flex;
	align-items: center;
	justyfi-content: center;
`;

const ChatAuthUsers = () => {
	const users = useSelector(selectAllUser);

	return (
		<Wrapper>
			{users.map((user, index) => <UserAuthItem
				userItem={user} key={index} />)}
		</Wrapper>
	);
};

export default ChatAuthUsers;
