import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFacebook, AiFillGoogleSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
	FormContainter,
	Form,
	Input,
	FooterForm,
	CustomSubmit,
	ErrorTitle,
	MinimalistButton,
	TextButton,
} from './formAuthStyles';
import Modal from '../modal/modal';
import { googleAuth, fbAuth } from '../../services/authProviders';
import { CloseModal } from '../../helpers/closeModal';
import { errorLogin, errorLoginuser } from '../../shared/auth/authSlice';
import { auth } from '../../services/firebase';
import {
	sendUserDataUsingForm,
	UpdateUserDataAferAuth,
} from '../../services/sendUserDataToFirebase';

const SignupUser = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit, errors } = useForm();
	const [modal, openModal] = useState(false);
	const firebaseError = useSelector(errorLoginuser);
	const onSubmit = ({ email, password, name }) => {
		auth().createUserWithEmailAndPassword(email, password)
			.then(() => UpdateUserDataAferAuth(name))
			.then(() => sendUserDataUsingForm(name))
			.catch(error => dispatch(errorLogin(error.message)));
	};
	return (
		<div>
			<MinimalistButton onClick={() => openModal(true)}>Register</MinimalistButton>
			<Modal
				open={modal}
				title='Register'
				close={() => openModal(false)}
			>
				<FormContainter>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Input
							name="name"
							placeholder="Name"
							type="text"
							ref={register({ required: true })}
						/>
						{errors.name?.type === 'required'
							&& <ErrorTitle>Name is required.</ErrorTitle>}
						<Input
							name="email"
							placeholder="Email"
							type="email"
							ref={register({ required: true })}
						/>
						{errors.email?.type === 'required'
							&& <ErrorTitle>Email is required.</ErrorTitle>}
						<Input
							name="password"
							type="password"
							placeholder="Password"
							ref={register({
								required: true,
								minLength: 6,
								maxLength: 24,
							})}
						/>
						{errors.password?.type === 'required'
							&& <ErrorTitle>Password is required.</ErrorTitle>}
						{errors.password?.type === 'minLength'
							&& <ErrorTitle>Min lenght is 6</ErrorTitle>}

						<Input submit type="submit" />
						{firebaseError !== null
							&& <ErrorTitle>{firebaseError}</ErrorTitle>}
					</Form>
					<FooterForm>
						<CustomSubmit google onClick={googleAuth}>
							<AiFillGoogleSquare size={'35px'} />
							<TextButton>Register with Google</TextButton>
						</CustomSubmit>
						<CustomSubmit onClick={fbAuth}>
							<AiFillFacebook size={'35px'}/>
							<TextButton>Register with Facebook</TextButton>
						</CustomSubmit>
					</FooterForm>
				</FormContainter>
				<CloseModal onClick={() => openModal(false)} />
			</Modal>
		</div>
	);
};
export default SignupUser;
