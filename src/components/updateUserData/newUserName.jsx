import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from '../../shared/auth/authSlice';
import { EditUserName } from '../../shared/editUserData/editUserDataSlice';
import {
	Wrapper,
	Form,
	FormInput,
	Button,
	H1,
} from './styledNewUserName';

const NewUserName = () => {
	const {
		register, handleSubmit, setValue,
	} = useForm();
	const dispatch = useDispatch();

	const { uid } = useSelector(selectCurrentUser);

	const onSubmit = ({ text }) => {
		dispatch(EditUserName(uid, text));
		setValue('text');
	};
	return (
		<Wrapper>
			<H1>EDIT NAME</H1>
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

export default NewUserName;
