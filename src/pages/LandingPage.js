import { useState } from 'react';
import { useNavigate } from 'react-router';
import React from 'react';
import Image from 'react-image-webp';
import { Link } from 'react-router-dom';

import('./LandingPage.css');

const LandingPage = () => {
	const navigate = useNavigate();

	const [displayAdmin, setDisplayAdmin] = useState(false);
	const [displayUser, setDisplayUser] = useState(false);

	const onClickDisplayHandler = () => {
		if (displayAdmin === false) {
			setDisplayAdmin(true);
		} else {
			setDisplayAdmin(false);
		}
	};

	const onClickDisplayUserHandler = () => {
		if (displayUser === false) {
			setDisplayUser(true);
		} else {
			setDisplayUser(false);
		}
	};

	return (
		<div className='landingContainer'>
			<p className='landingWelcome'> WELCOME TO </p>

			<Image
				className='landingLogo'
				webp={require('./assets/saverlogo.webp')}
			/>
			<p className='landing-chooseUser'>USE AS</p>
			<button className='landingBtn' onClick={onClickDisplayHandler}>
				{' '}
				ADMIN{' '}
			</button>
			<button className='landingBtn' onClick={onClickDisplayUserHandler}>
				{' '}
				USER{' '}
			</button>
			<button
				className='landingBtn'
				onClick={() => {
					navigate('/visitor-form');
				}}
			>
				{' '}
				VISITOR{' '}
			</button>

			{displayAdmin && (
				<div className='landingModal'>
					<div className='landingModalcontainer'>
						<h2 className='modalTitle'>ADMIN</h2>
						<button
							className='LandingmodalBtn'
							onClick={() => {
								navigate('/admin-login');
							}}
						>
							LOGIN
						</button>
						<button
							className='LandingmodalBtn'
							onClick={() => {
								navigate('/admin-register');
							}}
						>
							REGISTER
						</button>
						<div className='closeBtn' onClick={onClickDisplayHandler}>
							<span>✖</span>
						</div>
					</div>
				</div>
			)}

			{displayUser && (
				<div className='landingModal'>
					<div className='landingModalcontainer'>
						<h2 className='modalTitle'>USER</h2>
						<button
							className='LandingmodalBtn'
							onClick={() => {
								navigate('/user-login');
							}}
						>
							LOGIN
						</button>
						<button
							className='LandingmodalBtn'
							onClick={() => {
								navigate('/user-register');
							}}
						>
							REGISTER
						</button>
						<div className='closeBtn' onClick={onClickDisplayUserHandler}>
							<span>✖</span>
						</div>
					</div>
				</div>
			)}

			<div className='landing-page-bottom-container'>
				<Link className='link-page' to='/contacts'>
					{' '}
					EMERGENCY HOTLINES{' '}
				</Link>{' '}
				&nbsp; &nbsp;
				<Link className='link-page' to='/about'>
					{' '}
					ABOUT US
				</Link>
			</div>
		</div>
	);
};
export default LandingPage;
