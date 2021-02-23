import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { editChatName } from '../../../shared/chat/editChatSlice';
import {
	Wrapper, H1, Form, Button, FormInput,
} from './editChatNameStyle';

const EditChatName = () => {
	const {
		register, handleSubmit, setValue,
	} = useForm();
	const dispatch = useDispatch();
	const { id } = useParams();

	const onSubmit = ({ text }) => {
		dispatch(editChatName(id, text));
		setValue('text');
	};

	return (
		<Wrapper>
			<H1>EDIT CHAT NAME</H1>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<FormInput
					name="text"
					placeholder='New name'
					ref={register({ required: true })}
				/>
				<Button type="Submit">Change</Button>
			</Form>
		</Wrapper>
	);
};

export default EditChatName;
