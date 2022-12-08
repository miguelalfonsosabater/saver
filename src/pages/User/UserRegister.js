import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Lottie from 'lottie-react'
import RegisterLottie from '../assets/registerwhite.json'


import './UserRegister.css';

const UserRegister = () => {
	const navigate = useNavigate();

	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [contactNumber, setContactNumber] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onSubmitFormHandler = (event) => {
		event.preventDefault();

		const configuration = {
			method: 'post',
			url: 'http://localhost:8080/api/v1/users/register',
			data: {
				firstName,
				lastName,
				contactNumber,
				email,
				password
			},
		};

		// make the API call
		axios(configuration)
			.then((result) => {
				alert(result.data.status);
				navigate('/user-login');
				window.location.reload(false);
			})
			.catch((error) => {
				alert(error.response.data.status);
			});

		setFirstName('');
		setLastName('');
		setEmail('');
		setPassword('');
		setContactNumber('');
	};

	return (
		<div className='user-register-page'>

			<div className="registerLottieContainer">
				<Lottie
					animationData={RegisterLottie}
					loop={true}
					speed={0.2}
				/>

			</div>

			<section >


				<form className='user-register-form' onSubmit={onSubmitFormHandler}>

					<label className='user-register-form-header'>USER REGISTER</label>

					<div>
						<input
							className='user-register-input-firstname'
							onChange={(e) => setFirstName(e.target.value)}
							placeholder='firstname'
							required
							type='text'
							value={firstName}
						/>
					</div>

					<div>
						<input
							className='user-register-input-lastname'
							onChange={(e) => setLastName(e.target.value)}
							placeholder='lastname'
							required
							type='text'
							value={lastName}
						/>
					</div>

					<div>
						<input
							className='user-register-input-contact'
							onChange={(e) => setContactNumber(e.target.value)}
							placeholder='contact number'
							required
							type='tel'
							value={contactNumber}
						/>
					</div>

					<div>
						<input
							className='user-register-input-email'
							onChange={(e) => setEmail(e.target.value)}
							placeholder='email'
							required
							type='text'
							value={email}
						/>
					</div>

					<div>
						<input
							className='user-register-input-password'
							onChange={(e) => setPassword(e.target.value)}
							placeholder='password'
							required
							type='password'
							value={password}
						/>
					</div>

					<div>
						<button className='user-register-button' type='submit'>
							REGISTER
						</button>
					</div>

					<div>
						Already have an account? <Link to='/user-login'> Login </Link>
					</div>

				</form>

			</section>
		</div>

	);
};

export default UserRegister;