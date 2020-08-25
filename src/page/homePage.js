import React from 'react';
import { Pane } from 'evergreen-ui';
import ChatsList from '../features/getChatList/chatsList';
import CreateChatForm from '../features/createChat/createChatForm';
const HomePage = () => (
	<Pane>
		<CreateChatForm />
		<Pane padding="10px">
			<ChatsList/>
		</Pane>
	</Pane>
);

export default HomePage;