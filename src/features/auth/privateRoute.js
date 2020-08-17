import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuthUser from '../../hooks/useAuthUser';

export default function PrivateRoute({ children, ...rest }) {
	const currentUser = useAuthUser();
	return (
		<Route
			{...rest}
			render={({ location }) => (currentUser ? (
				children
			) : (
				<Redirect
					to={{
						pathname: '/',
						state: { from: location },
					}}
				/>
			))
			}
		/>
	);
}
