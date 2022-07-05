import React from 'react';
import { useState } from 'react';
import Button from '../ui/Button';
import Card from "../ui/card";

const UserRegisterForm = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onHandleName = newName => {
		setName(newName);
	};
	const onHandleEmail = newName => {
		setEmail(newName);
	};
	const onHandlePassword = newName => {
		setPassword(newName);
	};

	return (
		<section className='fixed  my-3 top-15 left-5 z-50 w-11/12'>
			<Card>
				<form onSubmit={event => handleSubmit(event, name, email, password)}>
					<div className='mb-3'>
						<label>
							<p>Name</p>
							<input
								type='text'
								name='name'
								className='rounded mb-2 w-full border p-2'
								placeholder='John Doe'
								onChange={ev => onHandleName(ev.target.value)}
							/>
						</label>
					</div>
					<div className='mb-3'>
						<label>
							<p>Email</p>
							<input
								type='text'
								name='email'
								className='rounded mb-2 w-full border p-2'
								placeholder='john@doe.com'
								onChange={ev => onHandleEmail(ev.target.value)}
							/>
						</label>
					</div>
					<div className='mb-3'>
						<label>
							<p>Password</p>
							<input
								type='text'
								name='password'
								className='rounded mb-2 w-full border p-2'
								placeholder='************'
								onChange={ev => onHandlePassword(ev.target.value)}
							/>
						</label>
					</div>

					<Button type='submit'>Register user</Button>
				</form>
			</Card>
		</section>
	);
};

const handleSubmit = async (event, name, email, password) => {
	event.preventDefault();
	const resp = await fetch('http://localhost:3001/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			id: crypto.randomUUID(),
			name,
			email,
			password
		})
	});

};

export default UserRegisterForm;
