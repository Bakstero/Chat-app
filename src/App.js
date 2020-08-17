import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Account from './page/account';
import HomePage from './page/homePage';
import Dashboard from './page/dashboard';
import PrivateRoute from './features/auth/privateRoute';
import Header from './components/header/header';

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Switch>
					<Route exact path="/">
						<HomePage />
					</Route>
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
