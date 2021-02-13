import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

import { axiosWithAuth } from "../utils/axiosWithAuth";

const AddFriend = () => {
	const initialFormValues = {
		name: '',
		age: '',
		email: '',
	}
	
	const history = useHistory();

	const [formValues, setFormValues] = useState(initialFormValues);

	const changeHandler = (e) => {
		setFormValues({ ...formValues, [e.target.name]: e.target.value});
	}

	const submitHandler = (e) => {
		e.preventDefault();
		axiosWithAuth().post('/friends', formValues)
		history.push('/friendslist')
		setFormValues({
			name: '',
			age: '',
			email: ''
		})
	}

	return (
		<>
			<Form onSubmit={submitHandler}>
				<FormGroup>
					<Label for='name'>Name</Label>
					<Input type='text' name='name' value={formValues.name} onChange={changeHandler} placeholder="Michael Scott"></Input>
				</FormGroup>
				<FormGroup>
					<Label for='age'>Age</Label>
					<Input type='text' name='age' value={formValues.age} onChange={changeHandler} placeholder="40"></Input>
				</FormGroup>
				<FormGroup>
					<Label for='email'>Email</Label>
					<Input type='text' name='email' value={formValues.email} onChange={changeHandler} placeholder="michael-scott@dundermifflin.com"></Input>
				</FormGroup>
				<Button color='success'>Submit</Button>
			</Form>
		</>
	)
}

export default AddFriend;