import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Account from './page/account';
import HomePage from './page/homePage';
import Dashboard from './page/dashboard';
import ChatPage from './page/chat';
import PrivateRoute from './routes/privateRoute';
import PublicRoute from './routes/publicRoute';
import * as ROUTE from './routes/routes';

const App = () => (
	<Router>
		<Switch>
			<PublicRoute component={HomePage} path={ROUTE.HOME} exact />
			<PrivateRoute component={Dashboard} path={ROUTE.DASHBOARD} />
			<PrivateRoute component={ChatPage} path={ROUTE.CHAT}/>
			<PrivateRoute component={Account} path={ROUTE.USER} />
		</Switch>
	</Router>
);

export default App;
