import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Account from './page/account';
import HomePage from './page/homePage';
import Dashboard from './page/dashboard';
import ChatPage from './page/chat';
import PrivateRoute from './features/auth/privateRoute';
import PublicRoute from './features/auth/publicRoute';

function App() {
	return (
		<Router>
			<Switch>
				<PublicRoute component={HomePage} path="/" exact />
				<PrivateRoute component={Dashboard} path="/dashboard" />
				<PrivateRoute component={ChatPage} path="/chat/:id"/>
				<PrivateRoute component={Account} path="/user/:id" />
			</Switch>
		</Router>
	);
}

export default App;
