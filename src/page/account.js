import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../services/firebase';

const GetUserData = () => {
	const [userData, setUserData] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const fetchUser = async () => {
			const result = await db.collection('users').doc(id).get();
			setUserData(result.data());
		};
		fetchUser();
	}, [id]);
	return userData;
};

const UserAccount = () => {
	const userData = GetUserData();
	return (
		<div>
			<h1>{userData.name}</h1>
			<img src={userData.avatar} />
			<h1>{userData.email}</h1>
		</div>
	);
};
export default UserAccount;
