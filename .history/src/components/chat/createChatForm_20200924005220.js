import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import { CreateChat } from '../../shared/chat/createChatSlice';
import{ AiOutlineEdit} from 'react-icons/ai'

const FormContainer = styled.form`
	width: 90%;
	height: 20%;
	padding: 10px;
	border-radius: 10px;
	display: flex;
	align-items:center;
	justify-content: flex-start;

	background-color: ${({ theme }) => theme.colors.primary}
`;

const NewChatAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	filter: brightness(50%);
`;

const NewChatInput = styled.input`
	margin-left: 15px;
	width:100%;
	border-radius: 10px;
	border:none;
	padding:10px;
`;

export const CreateButton = styled.button`
	margin-left: 15px;
	width: 40px;
	height: 40px;
	padding: 0%;
	border:none;
	background:none;
	color:black;
	cursor: pointer;
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
			<NewChatAvatar src={avatar} />
			<NewChatInput
				name="name"
				placeholder="New chat"
				ref={register({ required: true, maxLength: 12 })}
			/>
			{errors.name && <p>This field is required</p>}
			<CreateButton type="Submit">
				<AiOutlineEdit size={30} />
			</CreateButton>
		</FormContainer>
	);
};

export default CreateChatForm;
