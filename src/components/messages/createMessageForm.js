import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import { SendMsg } from '../../shared/messages/createMessageSlice';
import { Button } from '../button/button';

const Wrapper = styled.div`
	bottom:0;
	width: 100%;
	height:10vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 10px;
	background-color:${({ theme }) => theme.colors.background};
	@media ${({ theme }) => theme.device.mobileS} {
		width: 100%;
		margin:0;
  }
	@media ${({ theme }) => theme.device.laptop} {
		width: 100%;
		margin-left:0%;
  }
`;

const CreateMessageForm = () => {
	const { id } = useParams();
	const {
		register, handleSubmit, setValue,
	}	= useForm();
	const dispatch = useDispatch();
	const { name, uid, avatar } = useSelector(selectCurrentUser);

	const onSubmit = ({ text }) => {
		const message = {
			user: name,
			userUid: uid,
			userAvatar: avatar,
			text,
			data: Date().toLocaleString('en-us'),
		};
		dispatch(SendMsg(id, message));
		setValue('text');
	};
	return (
		<Wrapper>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					name="text"
					ref={register({ required: true })}
				/>
				<Button type="Submit">Send</Button>
			</form>
		</Wrapper>
	);
};

export default CreateMessageForm;
