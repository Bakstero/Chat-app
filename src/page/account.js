import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatContainerOffMobile } from '../components/chat/chatContainer';
import Layout from '../layout/layout';
import { db } from '../services/firebase';

const UserAccount = () => {
	const [userData, setUserData] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		const fetchUser = async () => {
			const result = await db.collection('users').doc(id).get();
			setUserData(result.data());
		};
		fetchUser();
	}, [id]);

	return (
		<Layout>
			<ChatContainerOffMobile />
			<h1>{userData.name}</h1>
			<img src={userData.avatar} alt={userData.avatar} />
			<h1>{userData.email}</h1>
		</Layout>
	);
};
export default UserAccount;
