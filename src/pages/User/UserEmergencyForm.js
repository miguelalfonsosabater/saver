import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from 'react-image-webp';
import './UserEmergencyForm.css';
import axios from 'axios';
import UserNavigator from './UserNavBar';

const UserEmergencyForm = () => {
	const navigate = useNavigate();

	const [emergencyType, setEmergencyType] = useState('accident');
	const [situation, setSituation] = useState('');
	const [responseNeeded, setResponseNeeded] = useState('police');
	const [userDetails, setUserDetails] = useState('');
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');

	const clientInStorage = localStorage.getItem('userId');

	useEffect(() => {
		axios
			.get(`http://localhost:8080/api/v1/users/${clientInStorage}`)
			.then((result) => {
				setUserDetails(result.data);
			});

		navigator.geolocation.getCurrentPosition((position) => {
			setLatitude(position.coords.latitude);
			setLongitude(position.coords.longitude);
		});
	}, [responseNeeded]);

	const onSubmitHandler = (e) => {
		console.log('clicked');
		e.preventDefault();

		const configuration = {
			method: 'post',
			url: 'http://localhost:8080/api/v1/requests/create-request',
			data: {
				emergencyType,
				situation,
				responseNeeded,
				name: `${userDetails.firstName} ${userDetails.lastName}`,
				contactNumber: userDetails.contactNumber,
				email: userDetails.email,
				latitude: latitude,
				longitude: longitude,
			},
		};

		// make the API call
		axios(configuration).then((result) => {
			alert(result.data.status);
			navigate('/emergency-form');
			window.location.reload(false);
		});
	};

	return (
		<div className='user-emergency-page'>

			<UserNavigator />

			<div className='user-emergency-container'>
				<h2 className='emergencyFormTitle'>EMERGENCY FORM</h2>
				<section>
					<form
						className='user-emergency-form'
						onSubmit={(e) => onSubmitHandler(e)}
					>
						<div>
							<select
								className='emergency-select'
								value={emergencyType}
								onChange={(e) => {
									setEmergencyType(e.target.value);
								}}
								required
							>
								<option style={{ textAlign: 'center' }} disabled>
									-- SELECT EMERGENCY TYPE --
								</option>
								<option value='accident'>accident</option>
								<option value='health'>health</option>
								<option value='violence'>violence</option>
								<option value='fire'>fire</option>
								<option value='rescue'>rescue</option>
								<option value='earthquake'>earthquake</option>
							</select>
						</div>

						<div className='emergency-textarea'>
							<textarea
								onChange={(e) => setSituation(e.target.value)}
								placeholder='additional information'
								required
								type='text'
								value={situation}
								rows='4'
								cols='30'
							></textarea>
						</div>

						<div>EMERGENCY NEED</div>

						<div className='emergencyNeedContainer'>
							<div
								className={
									responseNeeded === 'police'
										? 'responseActive'
										: 'responseInactive'
								}
								onClick={() => {
									setResponseNeeded('police');
								}}
							>
								<Image
									className='emergencyIcon'
									webp={require('../assets/police.webp')}
								/>
							</div>

							<div
								className={
									responseNeeded === 'ambulance'
										? 'responseActive'
										: 'responseInactive'
								}
								onClick={() => {
									setResponseNeeded('ambulance');
								}}
							>
								<Image
									className='emergencyIcon'
									webp={require('../assets/ambulance.webp')}
								/>
							</div>

							<div
								className={
									responseNeeded === 'fireman'
										? 'responseActive'
										: 'responseInactive'
								}
								onClick={() => {
									setResponseNeeded('fireman');
								}}
							>
								<Image
									className='emergencyIcon'
									webp={require('../assets/fireman.webp')}
								/>
							</div>

							<div
								className={
									responseNeeded === 'rescue'
										? 'responseActive'
										: 'responseInactive'
								}
								onClick={() => {
									setResponseNeeded('rescue');
								}}
							>
								<Image
									className='emergencyIcon'
									webp={require('../assets/rescue.webp')}
								/>
							</div>
						</div>

						<div>
							<button className='user-visitor-button' type='submit'>
								SUBMIT
							</button>
						</div>
					</form>
				</section>

			</div>

		</div>
	);
};

export default UserEmergencyForm;
