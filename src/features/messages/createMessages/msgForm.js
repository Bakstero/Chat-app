import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import {
	Pane, TextInput, ArrowRightIcon, Button,
} from 'evergreen-ui';
import { useParams } from 'react-router-dom';
import { danger } from '../../../components/alerts/toasers';
import { selectCurrentUser } from '../../auth/authSlice';
import { SendMsg } from './createMsgSlice';

const MsgForm = () => {
	const { id } = useParams();
	const { register, handleSubmit, errors, setValue } = useForm();
	const dispatch = useDispatch();
	const currentUser = useSelector(selectCurrentUser);

	const onSubmit = data => {
		const message = {
			user: currentUser.name,
			userUid: currentUser.uid,
			userAvatar: currentUser.avatar,
			tekst: data.text,
			data: Date.now(),
		};
		dispatch(SendMsg(id, message));
		setValue('text');
	};
	return (
		<Pane
			bottom={0}
			position="fixed"
			width="100%"
			height={50}
			background="tint2"
		>
			<Pane
				height="100%"
				width="100%"
				display="flex"
				alignItems="center"
				justifyContent="flex-end"
			>
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextInput
						name="text"
						width="70%"
						ref={register({ required: true })}
					/>
					{errors.text && danger('This field is required', 5)}
					<Button type="Submit" marginLeft={5} appearance="minimal"><ArrowRightIcon /></Button>
				</form>
			</Pane>
		</Pane>

	);
};

export default MsgForm;
