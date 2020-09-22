import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFacebook, AiFillGoogleSquare, AiOutlineClose } from 'react-icons/ai';
import Modal from '../modal/index';
import { googleAuth, fbAuth, loginAuth } from '../../services/authProviders';
import { CloseModal } from '../../helpers/closeModal';
import {
	FormContainter,
	HeaderForm,
	TitleForm,
	Form,
	Input,
	FooterForm,
	CustomSubmit,
	ErrorTitle,
	MinimalistButton,
	CloseButton, TextButton,

} from './formStyles';

const UserLogin = () => {
	const { register, handleSubmit, errors } = useForm();
	const [modal, openModal] = useState(false);

	const onSubmit = ({ email, password }) => {
		loginAuth(email, password);
	};

	return (
		<div>
			<MinimalistButton onClick={() => openModal(true)}>Login</MinimalistButton>
			<Modal open={modal}>
				<FormContainter>
					<HeaderForm>
						<TitleForm>Login</TitleForm>
						<CloseButton onClick={() => openModal(false)}>
							<AiOutlineClose size={'30px'} />
						</CloseButton>
					</HeaderForm>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Input
							name="email"
							placeholder="Email"
							type="email"
							validationMessage="This field is required"
							marginTop={20}
							ref={register({ required: true })}
						/>
						<Input
							name="password"
							type="password"
							marginTop={10}
							placeholder="password"
							ref={register({ required: true })}
						/>
						<Input submit type="submit" />
						{errors.password?.type === 'required' && <ErrorTitle>Password is required.</ErrorTitle>}
						{errors.email?.type === 'required' && <ErrorTitle>Email is required.</ErrorTitle>}
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
export default UserLogin;
