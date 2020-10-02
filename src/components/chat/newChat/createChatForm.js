import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineEdit, AiOutlineUserAdd } from 'react-icons/ai';
import { CreateChat } from '../../../shared/chat/createChatSlice';
import { allUsersPrm } from '../../../shared/chat/UsersPermissionSlice';
import {
	Wrapper,
	FormContainer,
	NewChatInput,
	CreateButton,
} from './styleNewChat';
import ChatAuthUsers from './chatAuthUsers';

const CreateChatForm = () => {
	const [usersContainer, openUsersContainer] = useState(false);
	const avatar = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
	const dispatch = useDispatch();
	const usersAuth = useSelector(allUsersPrm);
	const {
		register, handleSubmit, setValue,
	} = useForm();

	const OpenUsersContainer = () => {
		if (usersContainer === false) {
			openUsersContainer(true);
		} else {
			openUsersContainer(false);
		}
	};

	const onSubmit = ({ name }) => {
		const chatData = {
			name,
			messages: [],
			usersAuth,
			avatar,
		};
		dispatch(CreateChat(chatData));
		setValue('name');
	};
	return (
		<Wrapper to={'/new/chat'}>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>

				<NewChatInput
					name="name"
					placeholder="New chat"
					ref={register({ required: true, maxLength: 12 })}
				/>
				<CreateButton type="submit">
					<AiOutlineEdit size={30} />
				</CreateButton>
			</FormContainer>

			<CreateButton onClick={() => OpenUsersContainer()}>
				<AiOutlineUserAdd size={30} />
				Add users
			</CreateButton>

			{usersContainer === true && <ChatAuthUsers />}
		</Wrapper>
	);
};

export default CreateChatForm;
