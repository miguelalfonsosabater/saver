import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'lottie-react';
import RegisterLottie from '../assets/registerwhite.json';

import('./AdminRegister.css');

const AdminRegister = () => {
	const navigate = useNavigate();

	const adminTypes = [
		{ name: 'ambulance' },
		{ name: 'police' },
		{ name: 'fireman' },
		{ name: 'rescue' }
	];

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [responseType, setResponseType] = useState('ambulance');

	const onSubmitFormHandler = (event) => {
		event.preventDefault();

		const configuration = {
			method: 'post',
			url: 'http://localhost:8080/api/v1/auth/register',
			data: {
				name,
				email,
				password,
				responseType,
			},
		};

		// make the API call
		axios(configuration)
			.then((result) => {
				alert(result.data.status);
				navigate('/admin-login');
				window.location.reload(false);
			})
			.catch((error) => {
				alert(error.response.data.status);
			});

		setName('');
		setEmail('');
		setPassword('');
		setResponseType('');
	};

	return (
		<div className='Registerouter'>
			<div className='RegisterContainer'>
				<div className='registerLottieContainer'>
					<Lottie animationData={RegisterLottie} loop={true} speed={0.2} />
				</div>

				<section className='formContainer'>
					<div className='admin-register'>
						<p className='admin-title'> ADMIN REGISTER </p>
						<form onSubmit={onSubmitFormHandler}>
							<div className='form-outline mb-1'>
								<input
									className='form-control'
									type='text'
									value={name}
									onChange={(e) => setName(e.target.value)}
									placeholder='name'
									required
								/>
							</div>
							<div className='form-outline mb-1'>
								<input
									className='form-control'
									type='email'
									value={email}
									placeholder='email'
									onChange={(e) => setEmail(e.target.value)}
									required
								/>
							</div>
							<div className='form-outline mb-1'>
								<input
									className='form-control'
									type='password'
									value={password}
									placeholder='password'
									onChange={(e) => setPassword(e.target.value)}
									required
								/>
							</div>
							<div className='admin-register-dropdown-container'>
								<select
									className='admin-register-dropdown'
									onChange={(e) => setResponseType(e.target.value)}
									required
								>
									<option style={{textAlign: 'center'}} disabled>---- SELECT ADMIN TYPE -----</option>
									{adminTypes.map((item) => {
										return <option>{item.name}</option>;
									})}
								</select>
							</div>
							<div className='d-flex justify-content-center mt-3'>
								<button type='submit' className='registerBtn'>
									REGISTER
								</button>
							</div>
							<div className='form-outline mb-0 mt-2 text-center '>
								Already have an account? <Link to='/admin-login'> Login </Link>
							</div>
						</form>
					</div>
				</section>
			</div>
		</div>
	);
};

export default AdminRegister;
