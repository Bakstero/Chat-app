import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineEdit, AiOutlineUserAdd } from 'react-icons/ai';
import { CreateChat, allUsersPrm } from '../../../shared/chat/createChatSlice';
import {
	Wrapper,
	FormContainer,
	NewChatInput,
	CreateButton,
} from './styleNewChat';
import ChatAuthUsers from './chatAuthUsers';
import * as ROUTE from '../../../routes/routes';

const CreateChatForm = () => {
	const [Container, openContainer] = useState(false);
	const avatar = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
	const dispatch = useDispatch();
	const usersAuth = useSelector(allUsersPrm);
	const {
		register, handleSubmit, setValue,
	} = useForm();

	const OpenContainer = () => {
		Container === false ? openContainer(true) : openContainer(false);
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
		<Wrapper to={ROUTE.NEW_CHAT}>
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

			<CreateButton onClick={() => OpenContainer()}>
				<AiOutlineUserAdd size={30} />
				Add users
			</CreateButton>

			{Container === true && <ChatAuthUsers />}
		</Wrapper>
	);
};

export default CreateChatForm;
