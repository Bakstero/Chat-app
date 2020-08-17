import React from 'react';
import Component from '@reactions/component';
import {
	Button,
	Pane,
	Dialog,
	Heading,
	CrossIcon,
	TextInput,
	Text,
} from 'evergreen-ui';
import { useForm } from 'react-hook-form';
import { googleAuth, fbAuth, loginAuth } from '../../services/authProviders';

const UserLogin = () => {
	const { register, handleSubmit, errors } = useForm();

	const onSubmit = data => {
		loginAuth(data.email, data.password);
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
									<Heading size={800}>Login</Heading>
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
											validationMessage="This field is required"
											marginTop={20}
											ref={register({ required: true })}
										/>
										{errors.email?.type === 'required' && <Text color='danger' marginRight={'59%'} paddingTop={10}>Email is required.</Text>}

										<TextInput
											name="password"
											type="password"
											marginTop={10}
											placeholder="password"
											ref={register({ required: true })}
										/>
										{errors.password?.type === 'required' && <Text color='danger' marginRight={'50%'} paddingTop={10} >Password is required.</Text>}

										<TextInput marginTop={10} type="submit" />
									</form>
									<Button marginTop={20} appearance="primary" intent="danger" onClick={googleAuth}>
										Login with Google
									</Button>
									<Button marginTop={20} appearance="primary" intent="none" onClick={fbAuth}>
										Login with Facebook
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
							Login
						</Button>
					</Pane>
				)}
			</Component>
		</div>
	);
};
export default UserLogin;
