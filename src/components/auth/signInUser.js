import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFacebook, AiFillGoogleSquare } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../modal/modal';
import { googleAuth, fbAuth } from '../../services/authProviders';
import { CloseModal } from '../../helpers/closeModal';
import { errorLogin, errorLoginuser } from '../../shared/auth/authSlice';
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
import { auth } from '../../services/firebase';

const SignInUser = () => {
	const dispatch = useDispatch();
	const { register, handleSubmit, errors } = useForm();
	const [modal, openModal] = useState(false);
	const firebaseError = useSelector(errorLoginuser);

	const onSubmit = ({ email, password }) => {
		auth().signInWithEmailAndPassword(email, password)
			.catch(error => dispatch(errorLogin(error.message)));
	};

	return (
		<div>
			<MinimalistButton onClick={() => openModal(true)}>Login</MinimalistButton>
			<Modal
				open={modal}
				title='Login'
				close={() => openModal(false)}>
				<FormContainter>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Input
							name="email"
							placeholder="Email"
							type="email"
							validationMessage="This field is required"
							marginTop={20}
							ref={register({ required: true })}
						/>
						{errors.email?.type === 'required' && <ErrorTitle>Email is required.</ErrorTitle>}
						<Input
							name="password"
							type="password"
							marginTop={10}
							placeholder="password"
							ref={register({ required: true })}
						/>
						{errors.password?.type === 'required' && <ErrorTitle>Password is required.</ErrorTitle>}
						<Input submit type="submit" />
						{firebaseError !== null
							&& <ErrorTitle>{firebaseError}</ErrorTitle>}
					</Form>
					<FooterForm>
						<CustomSubmit google onClick={googleAuth}>
							<AiFillGoogleSquare size={'35px'} />
							<TextButton>Login with Google</TextButton>
						</CustomSubmit>
						<CustomSubmit onClick={fbAuth}>
							<AiFillFacebook size={'35px'} />
							<TextButton>Login with Facebook</TextButton>
						</CustomSubmit>
					</FooterForm>
				</FormContainter>
				<CloseModal onClick={() => openModal(false)} />
			</Modal>
		</div>
	);
};
export default SignInUser;
