import { Typography } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { useAuth } from '../contexs/AuthContex';
import Dashboard from '../views/Dashboard';
import FourOwlFour from '../views/FourOwlFour';
import LogIn from '../views/LogIn';
import SignUp from '../views/SignUp';
import ForgotPassword from '../views/ForgotPassword';
import AuthRoute from './components/AuthRoute';
import MemberRoute from './components/MemberRoute';

export default function Routes(props) {
	return (
		<>
			<Switch>
				<Route path="/404" exact>
					<FourOwlFour />
				</Route>
				<MemberRoute path="/" exact>
					<Dashboard />
				</MemberRoute>
				<MemberRoute path="/asdf" exact>
					Merhaba
				</MemberRoute>
				<AuthRoute path="/login" exact>
					<LogIn />
				</AuthRoute>
				<AuthRoute path="/signup" exact>
					<SignUp />
				</AuthRoute>
				<AuthRoute path="/forgot-password" exact>
					<ForgotPassword />
				</AuthRoute>
				<Route path="/">
					<Redirect to="/404" />
				</Route>
			</Switch>
		</>
	)
}
