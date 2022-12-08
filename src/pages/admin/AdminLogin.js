import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Lottie from 'lottie-react';
import LoginLottie from '../assets/userlottiewhite.json';

import('./AdminLogin.css');

const AdminLogin = () => {

	const navigate = new useNavigate();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const onChangeEmailHandler = (event) => {
		setEmail(event.target.value);
	};

	const onChangePasswordHandler = (event) => {
		setPassword(event.target.value);
	};

	const loginAuthentication = (e) => {

		e.preventDefault();
		const configuration = {
			method: 'post',
			url: 'http://localhost:8080/api/v1/auth/login',
			data: {
				email,
				password,
			},
		};

		// API call
		axios(configuration)
			.then((result) => {
				alert(result.data.status);
        localStorage.setItem("adminType", result.data.responseType);
				navigate('/admin-dashboard');
				window.location.reload(false);
			})
			.catch((error) => {
				alert(error.response.data.status);
				setEmail('');
				setPassword('');
			});
	};

	return (
		<div className='LoginMainContainer'>
			<section className='loginSectionContainer'>
				<div className='loginLottieContainer'>
					<Lottie animationData={LoginLottie} loop={true} speed={0.2} />
				</div>

				<div className='admin-login'>
					<p className='login-title'> ADMIN LOGIN </p>
					<form onSubmit={(e) => e.preventDefault()}>
						<div className='form-outline mb-1'>
							<input
								className='form-control form-control-md'
								type='email'
								value={email}
								placeholder='email'
								onChange={onChangeEmailHandler}
								required
							/>
						</div>
						<div className='form-outline mb-1'>
							<input
								className='form-control form-control-md'
								type='password'
								value={password}
								placeholder='password'
								onChange={onChangePasswordHandler}
								required
							/>
						</div>
						<div className='d-flex justify-content-center mt-3'>
							<button
								type='submit'
								className='LoginBtn'
								onClick={(e) => loginAuthentication(e)}
							>
								LOGIN
							</button>
						</div>
						<div className='LoginMessage'>
							Don't have an account? <Link to='/admin-register'> Register </Link>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
};

export default AdminLogin;
