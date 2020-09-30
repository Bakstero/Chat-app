import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchUsers } from '../../shared/users/getUsersSlice';
import UserItem from './userItem';

const Wrapper = styled.div`
	margin-top: 10vh;
	display: flex;
	width: 60%;
	height: 100px;
	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
		padding-left: 0%;
		height: 70px;
  }
	@media ${({ theme }) => theme.device.tablet} {
		width: 60%;
		margin-top: 8vh;
		height: 100px;
  }
`;

const Container = styled.div`
	display: flex;
	min-height: 100%;
	overflow: overlay;
	overflow-Y: none;
`;

const UsersList = () => {
	const dispatch = useDispatch();
	const { users, isLoading } = useSelector(state => state.users);
	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<Wrapper>
			{!isLoading ? (
				<Container>
					{users.map((user, index) => <UserItem
						userItem={user} key={index} />)}
				</Container>
			) : (
				<div>Loading...</div>
			)}
		</Wrapper>
	);
};

export default UsersList;
