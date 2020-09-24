import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import { SendMsg } from '../../shared/messages/createMessageSlice';
import { Button } from '../button/button';

const Wrapper = styled.div`
	position:fixed;
	bottom:0;
	width:100%;
	height:10vh;
`;

const CreateMessageForm = () => {
	const { id } = useParams();
	const {
		register, handleSubmit, errors, setValue,
	}	= useForm();
	const dispatch = useDispatch();
	const { name, uid, avatar } = useSelector(selectCurrentUser);

	const onSubmit = ({ text }) => {
		const message = {
			user: name,
			userUid: uid,
			userAvatar: avatar,
			text,
			data: Date.now(),
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
				{errors.text && <p>This field is required</p>}
				<Button type="Submit">Send</Button>
			</form>
		</Wrapper>
	);
};

export default CreateMessageForm;
