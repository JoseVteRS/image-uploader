import React from 'react';
import { useState } from 'react';
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
		<Card>
			<form onSubmit={event => handleSubmit(event, name, email, password)}>
				<div>
					<input
						type='text'
						name='name'
						className='rounded mb-2'
						placeholder='Name'
						onChange={ev => onHandleName(ev.target.value)}
					/>
				</div>
				<div>
					<input
						type='text'
						name='email'
						className='rounded mb-2'
						placeholder='email'
						onChange={ev => onHandleEmail(ev.target.value)}
					/>
				</div>
				<div>
					<input
						type='text'
						name='password'
						className='rounded mb-2'
						placeholder='password'
						onChange={ev => onHandlePassword(ev.target.value)}
					/>
				</div>
				<button type='submit' onClick={() => console.log({ userData })}>
					Guardar
				</button>
			</form>
		</Card>
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
console.log(resp)
};

export default UserRegisterForm;
