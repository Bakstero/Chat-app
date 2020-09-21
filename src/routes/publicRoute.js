import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuthUser from '../hooks/useAuthUser';

export default function PublicRoute({ component: Component, restricted, ...rest }) {
	const currentUser = useAuthUser();

	return (
		<Route {...rest} render={props => (
			currentUser
				? <Redirect to="/dashboard" />
				: <Component {...props} />
		)} />
	);
}
// restricted = false meaning public route
// restricted = true meaning restricted route
