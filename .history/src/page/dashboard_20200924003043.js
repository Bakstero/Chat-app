import React from 'react';
import Layout from '../layout/layout';
import ChatContainer from '../components/chat/chatContainer';
import CreateChatForm from '../components/chat/createChatForm';
import UsersList from '../components/users/UsersList';

const Dashboard = () => (
	<Layout>
		<UsersList />
		<CreateChatForm />
		<ChatContainer />
	</Layout>
);

export default Dashboard;
