import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pane, Strong, Avatar } from 'evergreen-ui';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from './getUsersSlice';

const UsersList = () => {
	const dispatch = useDispatch();
	const { users, isLoading } = useSelector(state => state.users);
	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	return (
		<Pane
			width="100%"
			height="65px"
			display="flex"
			alignItems="center"
			justifyContent="center"
			flexDirection="row"
			marginTop={100}
			padding={10}
			top="80px"
			zIndex={1}
		>
			{isLoading ? <h1>Loading users</h1>
				: <Pane
					display="flex"
					alignItems="center"
					justifyContent="center"
					flexDirection="row">
					{users.map(({ id, name, avatar }, keyId) => <div key={keyId}>
						<Link to={`/${id}`}>
							<Avatar
								src={avatar}
								name="Alan Turing"
								size={60}
								marginRight={16}
							/>
							<Strong size={300}>{name}</Strong>
						</Link>
					</div>)}
				</Pane>
			}
		</Pane>
	);
};

export default UsersList;
