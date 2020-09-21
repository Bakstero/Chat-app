import React from 'react';
import Layout from '../layout/layout';
import ChatsList from '../features/getChatList/chatsList';
import CreateChatForm from '../features/createChat/createChatForm';
import UsersList from '../features/getUsers/UsersList';

const Dashboard = () => (
	<Layout>
		<UsersList />
		<CreateChatForm />
		<ChatsList />
	</Layout>
);

export default Dashboard;
