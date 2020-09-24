import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineEdit, AiOutlineUserAdd } from 'react-icons/ai';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import { CreateChat } from '../../shared/chat/createChatSlice';

const Wrapper = styled.div`
	width: 95%;
	height: 20%;
	padding: 5px;
	border-radius: 10px;
	display: flex;
	align-items:center;
	justify-content: flex-start;
`;

const FormContainer = styled.form`
	padding: 5px;
	display: flex;
	align-items:center;
	justify-content: center;
`;

const NewChatAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	filter: brightness(250%);
`;

const NewChatInput = styled.input`
	border: 1px solid ${({ theme }) => theme.colors.border};
	margin-left: 15px;
	width:100%;
	border-radius: 10px;
	padding:10px;
	outline:none;
	::placeholder {
  	color: ${({ theme }) => theme.colors.black};
	}
`;

export const CreateButton = styled.button`
	margin-left: 15px;
	width: 50px;
	height: 50px;
	padding: 0%;
	border:none;
	background:none;
	color:black;
	cursor: pointer;
	outline:none;
`;

const CreateChatForm = () => {
	const {
		register, handleSubmit, setValue,
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
		<Wrapper>
			<FormContainer onSubmit={handleSubmit(onSubmit)}>
				<NewChatAvatar src={avatar} />
				<NewChatInput
					name="name"
					placeholder="New chat"
					ref={register({ required: true, maxLength: 12 })}
				/>

				<CreateButton type="submit">
					<AiOutlineEdit size={30} />
				</CreateButton>
			</FormContainer>
			<CreateButton onClick={() => alert('add auth')}>
				<AiOutlineUserAdd size={30} />
			</CreateButton>
		</Wrapper>
	);
};

export default CreateChatForm;
