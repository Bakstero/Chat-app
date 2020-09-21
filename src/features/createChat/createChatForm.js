import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { danger } from '../../components/alerts/toasers';
import { selectCurrentUser } from '../auth/authSlice';
import { CreateChat } from './createChatSlice';

const CreateChatForm = () => {
	const {
		register, handleSubmit, errors, setValue,
	} = useForm();
	const dispatch = useDispatch();
	const { uid } = useSelector(selectCurrentUser);
	const onSubmit = ({ name }) => {
		const usersAuth = [uid];
		const chatData = {
			name,
			messages: [],
			usersAuth,
		};
		dispatch(CreateChat(chatData));
		setValue('name');
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div>
					<h2>Create new chat</h2>
					<input
						name="name"
						placeholder="Name chat"
						ref={register({ required: true, maxLength: 12 })}
					/>
					{errors.name && danger('This field is required', 5)}
					<input
						type="Submit"
						value="Create new chat"
					/>
				</div>
			</form>
		</div>
	);
};

export default CreateChatForm;
