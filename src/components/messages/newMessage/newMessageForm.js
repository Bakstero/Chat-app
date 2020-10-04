import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { selectCurrentUser } from '../../../shared/auth/authSlice';
import { SendMsg } from '../../../shared/messages/createMessageSlice';
import { NewMsgWrapper, Button, Form, FormInput } from './styleNewMessage';

const NewMessageForm = () => {
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
		<NewMsgWrapper>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormInput
					name="text"
					ref={register({ required: true })}
				/>
				<Button type="Submit">Send</Button>
			</Form>
		</NewMsgWrapper>
	);
};

export default NewMessageForm;
