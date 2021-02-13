import React, { useState} from "react";
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';

import './Login.css';

const Login = () => {
	const initialCredentials = {
    username: '',
    password: '',
  };

	const history = useHistory();

	const [credentials, setCredentials] = useState(initialCredentials);
	const [isLoading, setIsLoading] = useState(false);

	const onChange = (e) => {
		setCredentials({ ...credentials, [e.target.name]: e.target.value});
	}

	const login = (e) => {
		e.preventDefault();
		setIsLoading(true);
		axios.post('http://localhost:5000/api/login', credentials)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
				setIsLoading(false);
				history.push('/friendslist')
			})
	}

	return (
		<Form onSubmit={login}>
			<FormGroup>
				<Label for="username">Username</Label>
				<Input type="text" name="username" value={credentials.username} onChange={onChange} />
			</FormGroup>
			<FormGroup>
				<Label for="password">Password</Label>
				<Input type="text" name="password" value={credentials.password} onChange={onChange} />
			</FormGroup>
			<Button color="danger">{isLoading ? 'Loading...' : 'Login' }</Button>
		</Form>
	)
}

export default Login;