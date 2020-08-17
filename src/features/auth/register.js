import React from 'react';
import Component from '@reactions/component';
import { useForm } from 'react-hook-form';
import {
	Button,
	Pane,
	Dialog,
	Heading,
	CrossIcon,
	TextInput,
	Text,
} from 'evergreen-ui';
import { googleAuth, fbAuth, emailAuth } from '../../services/authProviders';

const RegisterUser = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		emailAuth(data.email, data.password);
	};

	return (
		<div>
			<Component initialState={{ isShown: false }}>
				{({ state, setState }) => (
					<Pane>
						<Dialog
							isShown={state.isShown}
							onCloseComplete={() => setState({ isShown: false })}
							hasCancel={false}
							hasHeader={false}
							confirmLabel={<CrossIcon />}
							intent="danger"
						>
							<Pane>
								<Pane
									display="flex"
									justifyContent="center"
									alignItems="center"
									flexDirection="column"
								>
									<Heading size={800}>Register</Heading>
									<form
										style={{
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
										}}
										onSubmit={handleSubmit(onSubmit)}
									>
										<TextInput
											name="email"
											placeholder="Email"
											type="email"
											marginTop={20}
											ref={register({ required: true })}
										/>
										{errors.email?.type === 'required'
											&& <Text color='danger' marginRight={'59%'} paddingTop={10} >Email is required.</Text>}

										<TextInput
											name="password"
											type="password"
											marginTop={10}
											placeholder="password"
											ref={register({
												required: true,
												minLength: 6,
												maxLength: 24,
											})}
										/>
										{errors.password?.type === 'required'
											&& <Text color='danger' marginRight={'50%'} paddingTop={10} >Password is required.</Text>}
										{errors.password?.type === 'minLength'
											&& <Text color='danger' marginRight={'65%'} paddingTop={10} >Min lenght is 6</Text>}
										<TextInput marginTop={10} type="submit" />
									</form>

									<Button marginTop={20} appearance="primary" intent="danger" onClick={googleAuth}>
                  	Register with Google
									</Button>
									<Button marginTop={20} appearance="primary" intent="none" onClick={fbAuth}>
                  	Register with Facebook
									</Button>
								</Pane>
							</Pane>
						</Dialog>

						<Button
							appearance="minimal"
							intent="none"
							height={40}
							onClick={() => setState({ isShown: true })}
						>
            Register
						</Button>
					</Pane>
				)}
			</Component>
		</div>
	);
};
export default RegisterUser;
