import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Account from './page/account';
import HomePage from './page/homePage';
import Dashboard from './page/dashboard';
import ChatPage from './page/chat';
import PrivateRoute from './features/auth/privateRoute';
import Header from './components/header/header';
import UsersList from './features/getUsers/UsersList';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<UsersList />
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
					<PrivateRoute path="/chat/:id">
						<ChatPage />
					</PrivateRoute>
					<PrivateRoute path="/:id">
						<Account />
					</PrivateRoute>
					<PrivateRoute path="/dashboard">
						<Dashboard />
					</PrivateRoute>

				</Switch>
			</div>
		</Router>
	);
}

export default App;
