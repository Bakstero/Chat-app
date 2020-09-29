import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillFacebook, AiFillGoogleSquare, AiOutlineClose } from 'react-icons/ai';
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
	CloseButton,
	TextButton,
} from './formStyles';
import Modal from '../modal/index';
import { googleAuth, fbAuth, emailAuth } from '../../services/authProviders';
import { CloseModal } from '../../helpers/closeModal';

const RegisterUser = () => {
	const { register, handleSubmit, errors } = useForm();
	const [modal, openModal] = useState(false);

	const onSubmit = ({ email, password, name }) => {
		emailAuth(email, password, name);
	};

	return (
		<div>
			<MinimalistButton onClick={() => openModal(true)}>Register</MinimalistButton>
			<Modal open={modal}>
				<FormContainter>
					<HeaderForm>
						<TitleForm>Register</TitleForm>
						<CloseButton onClick={() => openModal(false)}>
							<AiOutlineClose size={'30px'} />
						</CloseButton>
					</HeaderForm>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Input
							name="name"
							placeholder="Name"
							type="text"
							ref={register({ required: true })}
						/>
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
export default RegisterUser;
