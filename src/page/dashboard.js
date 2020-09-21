import React from 'react';
import Layout from '../layout/layout';
import ChatsList from '../components/chat/chatsList';
import CreateChatForm from '../components/chat/createChatForm';
import UsersList from '../components/users/UsersList';

const Dashboard = () => (
	<Layout>
		<UsersList />
		<CreateChatForm />
		<ChatsList />
	</Layout>
);

export default Dashboard;
