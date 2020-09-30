import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineEdit, AiOutlineUserAdd } from 'react-icons/ai';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import { CreateChat } from '../../shared/chat/createChatSlice';

const Wrapper = styled.div`
	padding-top:10vh;
	width: 60%;
	height: 100vh;
	display: flex;
	flex-direction:column;
	background-color:${({ theme }) => theme.colors.background};
	border-right: 1px solid ${({ theme }) => theme.colors.border};
	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
  }
	@media ${({ theme }) => theme.device.mobileL} {
		width: 60%;
		padding-left:0vh;
  }
`;
const FormContainer = styled.form`
	padding: 5px;
	display: flex;
	align-items:center;
	justify-content: center;
`;

const NewChatInput = styled.input`
	border: 1px solid ${({ theme }) => theme.colors.border};
	margin-left: 15px;
	width:100%;
	border-radius: 10px;
	padding: 10px;
	outline:none;
	::placeholder {
  	color: ${({ theme }) => theme.colors.black};
	}
`;

export const CreateButton = styled.button`
	margin-left: 15px;
	width: 120px;
	height: 50px;
	padding: 0%;
	border:none;
	border-radius:12px;
	background:none;
	color:black;
	cursor: pointer;
	outline:none;
	display:flex;
	align-items:center;
	justify-content:center;
	:hover {
		border: 1px solid ${({ theme }) => theme.colors.border}
	}
	@media ${({ theme }) => theme.device.mobileS} {
	width: 100px;
	}
	@media ${({ theme }) => theme.device.laptop} {
		width: 120px;

	}
`;

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
