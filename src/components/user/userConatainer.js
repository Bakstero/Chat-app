import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatContainerOffMobile } from '../chat/chatContainer';
import {
	Wrapper,
	UserAvatar,
	UserInformations,
} from './styleUserContainer';
import { db } from '../../services/firebase';
import CreateChatForm from './createChatInPage';

const UserAccount = () => {
	const [{ email, avatar, name}, setUserData] = useState([]);
	const { id } = useParams();
	useEffect(() => {
		const fetchUser = async () => {
			const result = await db.collection('users').doc(id).get();
			setUserData(result.data());
		};
		fetchUser();
	}, [id]);

	return (
		<Wrapper>
			<ChatContainerOffMobile />
			<UserAvatar src={avatar} alt={avatar} />
			<UserInformations>{email}</UserInformations>
			<UserInformations Name>{name}</UserInformations>
			<CreateChatForm />
		</Wrapper>
	);
};
export default UserAccount;
