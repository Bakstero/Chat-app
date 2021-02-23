import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { CreateChat } from '../../shared/chat/createChatSlice';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import { NewChatButton } from './styleUserContainer';

const CreateChatForm = () => {
	const avatar = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
	const dispatch = useDispatch();
	const { id } = useParams();
	const { uid } = useSelector(selectCurrentUser);

	const onSubmit = () => {
		const usersAuth = [uid, id];

		const chatData = {
			name: 'New chat',
			messages: [],
			usersAuth,
			avatar,
		};
		dispatch(CreateChat(chatData));
	};
	return <NewChatButton onClick={() => onSubmit()}>Create chat</NewChatButton>;
};

export default CreateChatForm;
