import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { fetchUsers } from '../../shared/users/getUsersSlice';
import UserItem from './userItem';

const Wrapper = styled.div`
	margin-top: 6vh;
	display:flex;
	justify-content:center;
	width:100%;
	height:100px;
	padding:10px;
`;

const Container = styled.div`
	display:flex;
	min-height:100%;
	overflow: overlay;
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
					{users.map(user => <UserItem user={user} key />)}
				</Container>
			) : (
				<div>Loading...</div>
			)}
		</Wrapper>
	);
};

export default UsersList;
