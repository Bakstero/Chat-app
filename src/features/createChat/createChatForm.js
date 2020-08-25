import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import {
	Pane, TextInput, Button, Dialog, Heading,
} from 'evergreen-ui';
import Component from '@reactions/component';
import { danger } from '../../components/alerts/toasers';
import { selectCurrentUser } from '../auth/authSlice';
import { CreateChat } from './createChatSlice';

const CreateChatForm = () => {
	const {
		register, handleSubmit, errors, setValue,
	} = useForm();
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);

	const onSubmit = data => {
		const chatData = {
			name: data.name,
			messages: [],
			usersAuth: [currentUser.uid],
		};
		dispatch(CreateChat(chatData));
		setValue('name');
	};
	return (
		<Component initialState={{ isShown: false }}>
			{({ state, setState }) => (
				<Pane>
					<Dialog
						isShown={state.isShown}
						hasFooter={false}
						hasHeader={false}
						onCloseComplete={() => setState({ isShown: false })}
					>
						<form onSubmit={handleSubmit(onSubmit)}>
							<Pane
								display="flex"
								alignItems="center"
								justifyContent="center"
								flexDirection="column"
							>
								<Heading size={800} marginBottom={20}>Create new chat</Heading>
								<TextInput
									height={50}
									marginTop={20}
									width="100%"
									name="name"
									placeholder="Name chat"
									ref={register({ required: true, maxLength: 12 })}
								/>
								{errors.name && danger('This field is required', 5)}
								<TextInput
									type="Submit"
									value="Create new chat"
									marginTop={20}
									width="100%"
									height={50}
								/>
							</Pane>
						</form>
      		</Dialog>
					<Button onClick={() => setState({ isShown: true })}>Create new chat</Button>
				</Pane>
			)}
		</Component>
	);
};

export default CreateChatForm;
/*

				<form onSubmit={handleSubmit(onSubmit)}>
					<TextInput
						name="name"
						width="70%"
						ref={register({ required: true, maxLength: 12 })}
					/>
					{errors.name && danger('This field is required', 5)}
					<Button type="Submit" marginLeft={5} appearance="minimal"><ArrowRightIcon /></Button>
				</form>
				*/
