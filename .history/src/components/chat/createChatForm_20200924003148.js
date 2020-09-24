import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import { CreateChat } from '../../shared/chat/createChatSlice';

const ChatContainer = styled.form`
	text-decoration:none;
	width: 90%;
	height: 20%;
	margin-top:20px;
	padding: 10px;
	display: flex;
	border-radius: 10px;
	align-items:center;
	justify-content: flex-start;
	background-color: ${({ theme }) => theme.colors.primary}
`;

const CreateChatForm = () => {
	const {
		register, handleSubmit, errors, setValue,
	} = useForm();
	const dispatch = useDispatch();
	const { uid } = useSelector(selectCurrentUser);

	const onSubmit = ({ name }) => {
		const usersAuth = [uid];
		const avatar = 'https://firebasestorage.googleapis.com/v0/b/appwillay.appspot.com/o/avatars%2FDefaultUserAvatar.jpg?alt=media&token=aa410a73-9c7f-4d93-926c-37dae73dc136';
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<div>
				<h2>Create new chat</h2>
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
		</form>
	);
};

export default CreateChatForm;
