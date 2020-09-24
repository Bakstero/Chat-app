import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import { CreateChat } from '../../shared/chat/createChatSlice';

const FormContainer = styled.form`
	width: 90%;
	height: 20%;
	padding: 10px;
	display: flex;
	border-radius: 10px;
	align-items:center;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.colors.primary}
`;

const ChatAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
`;

const CreateChatForm = () => {
	const {
		register, handleSubmit, errors, setValue,
	} = useForm();
	const dispatch = useDispatch();
	const { uid } = useSelector(selectCurrentUser);
	const avatar = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
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
		<FormContainer onSubmit={handleSubmit(onSubmit)}>
			<div>
				<ChatAvatar src={avatar} />
				<input
					name="name"
					placeholder="Name chat"
					ref={register({ required: true, maxLength: 12 })}
				/>
				{errors.name && <p>This field is required</p>}
				<input
					type="Submit"
					value="Create new chat"
				/>
			</div>
		</FormContainer>
	);
};

export default CreateChatForm;
