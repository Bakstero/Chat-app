import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { AiOutlineEdit, AiOutlineUserAdd } from 'react-icons/ai';
import { selectCurrentUser } from '../../../shared/auth/authSlice';
import { CreateChat } from '../../../shared/chat/createChatSlice';
import {
	Wrapper,
	FormContainer,
	NewChatInput,
	CreateButton,
} from './styleNewChat';

const CreateChatForm = () => {
	const avatar = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
	const dispatch = useDispatch();
	const { uid } = useSelector(selectCurrentUser);
	const {
		register, handleSubmit, setValue,
	} = useForm();

	const onSubmit = ({ name }) => {
		const usersAuth = [uid];
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
			<CreateButton><AiOutlineUserAdd size={30} />Add users</CreateButton>
		</Wrapper>
	);
};

export default CreateChatForm;
