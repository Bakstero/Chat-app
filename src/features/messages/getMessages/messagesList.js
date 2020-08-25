import React, { useEffect } from 'react';
import {
	Pane, Avatar, Paragraph, Popover, Position, Menu, PeopleIcon, DeleteIcon,
} from 'evergreen-ui';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessages } from './getMessagesSlice';
import { selectCurrentUser } from '../../auth/authSlice';
import { db, dbUpdate } from '../../../services/firebase';
import ScrollBottom from '../../../utils/scrollBottom';

const MessagesList = () => {
	const currentUser = useSelector(selectCurrentUser);
	const dispatch = useDispatch();
	const { messages, isLoading } = useSelector(state => state.messages);
	const { id } = useParams();

	useEffect(() => {
		dispatch(fetchMessages(id));
		// eslint-disable-next-line
	}, [dispatch]);

	const DeleteMessage = async (tekst, data) => {
		await db.collection('chat')
			.doc(id)
			.update({
				messages:
					dbUpdate.FieldValue.arrayRemove({
						user: currentUser.name,
						userUid: currentUser.uid,
						userAvatar: currentUser.avatar,
						tekst,
						data,
					}),
			});
	};

	return (
		<Pane
			marginBottom={60}
		>
			{isLoading ? (<h1>Loading Messages</h1>) : (
				<Pane>
					{messages.map(({
						user, userUid, userAvatar, tekst, data,
					}, keyId) => <Pane
						display="flex"
						alignItems="center"
						justifyContent="flex-end"
						border="none"
						background="redTint"
						borderRadius="15px"
						marginBottom={20}
						padding={10}
						key={keyId}
					>
						<Paragraph size={500} textAlign="left">{tekst}</Paragraph >
						<Popover
							position={Position.LEFT}
							content={
								<Menu>
									<Menu.Group>
										<Link style={{ textDecoration: 'none' }} to={`/${userUid}`} ><Menu.Item icon={PeopleIcon}>Profile</Menu.Item></Link>
										{userUid === currentUser.uid
											? (<Menu.Item
												icon={DeleteIcon}
												onClick={() => { DeleteMessage(tekst, data); }}
											>
													Delete</Menu.Item>
											) : (null)}

									</Menu.Group>
									<Menu.Divider />
								</Menu>
							}
						>
							<Avatar
								marginLeft={15}
								src={userAvatar}
								name={user}
								size={40}
								cursor='pointer'
							/>
						</Popover>
					</Pane>)
					}
				</Pane>
			)
			}
			<ScrollBottom />
		</Pane>
	);
};

export default MessagesList;
