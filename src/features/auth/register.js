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
} from '../../components/form/form';
import Modal from '../../components/Modal/modal';
import { googleAuth, fbAuth, emailAuth } from '../../services/authProviders';
import { MinimalistButton } from '../../components/button/button';
import { CloseModal } from '../../utils/closeModal';

const RegisterUser = () => {
	const { register, handleSubmit, errors } = useForm();
	const [modal, openModal] = useState(false);

	const onSubmit = ({ email, password }) => {
		emailAuth(email, password);
	};

	return (
		<div>
			<MinimalistButton primary onClick={() => openModal(true)}>Register</MinimalistButton>
			<Modal open={modal}>
				<FormContainter>
					<HeaderForm>
						<TitleForm>Register</TitleForm>
						<CustomSubmit exit onClick={() => openModal(false)}>
							<AiOutlineClose size={'30px'} />
						</CustomSubmit>
					</HeaderForm>
					<Form onSubmit={handleSubmit(onSubmit)}>
						<Input
							name="email"
							placeholder="Email"
							type="email"
							marginTop={20}
							ref={register({ required: true })}
						/>
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
						<Input submit type="submit" />
						{errors.password?.type === 'required'
							&& <ErrorTitle>Password is required.</ErrorTitle>}
						{errors.password?.type === 'minLength'
							&& <ErrorTitle>Min lenght is 6</ErrorTitle>}
						{errors.email?.type === 'required'
							&& <ErrorTitle>Email is required.</ErrorTitle>}
					</Form>
					<FooterForm>
						<CustomSubmit google onClick={googleAuth}>
							<AiFillGoogleSquare size={'35px'} />
							<p>Register with Google</p>
						</CustomSubmit>
						<CustomSubmit onClick={fbAuth}>
							<AiFillFacebook size={'35px'}/>
							<p>Register with Facebook</p>
						</CustomSubmit>
					</FooterForm>
				</FormContainter>
				<CloseModal onClick={() => openModal(false)} />
			</Modal>
		</div>
	);
};
export default RegisterUser;
