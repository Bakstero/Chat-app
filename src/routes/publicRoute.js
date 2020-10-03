import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuthUser from '../hooks/useAuthUser';
import * as ROUTE from './routes';

export default function PublicRoute({ component: Component, restricted, ...rest }) {
	const currentUser = useAuthUser();

	return (
		<Route {...rest} render={props => (
			currentUser
				? <Redirect to={ROUTE.DASHBOARD} />
				: <Component {...props} />
		)} />
	);
}
// ! restricted = false meaning public route
// ! restricted = true meaning restricted route
