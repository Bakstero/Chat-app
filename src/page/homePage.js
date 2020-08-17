import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../features/auth/authSlice';
import { db } from '../services/firebase';

const GetAllUsers = () => {
	const [users, setUsers] = useState([]);
	useEffect(() => {
		db.collection('users')
			.onSnapshot(querySnapshot => {
				const usersDocs = querySnapshot.docs.map(doc => ({
					id: doc.id,
					...doc.data(),
				}));
				setUsers(usersDocs);
			});
	}, []);
	return users;
};

const HomePage = () => {
	const { register, handleSubmit } = useForm();
	const currentUser = useSelector(selectCurrentUser);
	const usersMap = GetAllUsers();

	const onSubmit = data => {
		db.collection('chat').doc().set({ users: currentUser.uid, messages: [data] }, { merge: true });
	};
	return (
		<div>
			{usersMap.map((user, id) => <div key={id}>
				<h1>{user.email}</h1>
				<Link to={`/${user.id}`}>{user.name}</Link>
			</div>)
			}
			<form onSubmit={handleSubmit(onSubmit)}>
  			<input
					name="name"
					placeholder="to"
					ref={register({ required: true, maxLength: 20 })}
				/>
 				<input
					name="firstName"
					ref={register({ required: true, maxLength: 20 })}
				/>
				<input name="lastName" ref={register()} />
				<input type="submit" />
			</form>
		</div>
	);
};

export default HomePage;

