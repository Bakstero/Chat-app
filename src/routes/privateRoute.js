import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuthUser from '../hooks/useAuthUser';
import * as ROUTE from './routes';

export default function PrivateRoute({ component: Component, ...rest }) {
	const currentUser = useAuthUser();
	return (
	// ! Show the component only when the user is logged in
	// ! Otherwise, redirect the user to / page
		<Route {...rest} render={props => (
			currentUser
				? <Component {...props} />
				: <Redirect to={ROUTE.HOME} />
		)} />
	);
}
