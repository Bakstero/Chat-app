import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../shared/users/getUsersSlice';
import UserItem from './userItem';
import {
	UserListWrapper,
	UserListContainer,
} from './styleUsers';

const UsersList = () => {
	const dispatch = useDispatch();
	const { users, isLoading } = useSelector(state => state.users);
	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<UserListWrapper>
			{!isLoading ? (
				<UserListContainer>
					{users.map((user, index) => <UserItem
						userItem={user} key={index} />)}
				</UserListContainer>
			) : (
				<div>Loading...</div>
			)}
		</UserListWrapper>
	);
};

export default UsersList;
