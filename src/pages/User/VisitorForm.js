import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Image from 'react-image-webp';

//css
import './VisitorForm.css';

const VisitorForm = () => {

	const navigate = useNavigate();

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [emergencyType, setEmergencyType] = useState('accident');
	const [situation, setSituation] = useState('');
	const [responseNeeded, setResponseNeeded] = useState('police');
	const [latitude, setLatitude] = useState('');
	const [longitude, setLongitude] = useState('');

	useEffect(() => {

		navigator.geolocation.getCurrentPosition((position) => {
			setLatitude(position.coords.latitude)
			setLongitude(position.coords.longitude)
		})

	}, []);



	const onSubmitHandler = (e) => {

		e.preventDefault();

		const configuration = {
			method: 'post',
			url: 'http://localhost:8080/api/v1/requests/create-request',
			data: {
				emergencyType,
				situation,
				responseNeeded,
				name,
				email,
				latitude,
				longitude
			},
		};

		// make the API call
		axios(configuration)
			.then((result) => {
				alert(result.data.status);
				navigate('/emergency-form');
				window.location.reload(false);
			})
	};

	return (

		<div className='user-visitor-page'>

			<div className='user-visitor-header'>		
				<Image
					className="logoNavIcon"
					webp={require("../assets/saverlogo.webp")}
					onClick={() => {
						navigate('/');
					}
					}
				/>

				<h3 className='VisitorTitle'>VISITOR EMERGENCY FORM</h3>
				<div className='user-visitor-header-filler'>{" "}</div>
			</div>


			<section >
				<form className='user-visitor-form' onSubmit={(e) => onSubmitHandler(e)}>

					<div>
						<input className='visitor-name-input'
							onChange={(e) => setName(e.target.value)}
							placeholder='name'
							required
							type='text'
							value={name}
						/>
					</div>

					<div>
						<input className='visitor-email-input'
							onChange={(e) => setEmail(e.target.value)}
							placeholder='email'
							required
							type='email'
							value={email}
						/>
					</div>

					<div>
						<select className='visitor-select'
							value={emergencyType}
							onChange={(e) => {
								setEmergencyType(e.target.value);
							}}
							required
						>
							<option style={{textAlign: 'center'}} disabled>-- SELECT EMERGENCY TYPE --</option>
							<option value='accident'>accident</option>
							<option value='health'>health</option>
							<option value='violence'>violence</option>
							<option value='fire'>fire</option>
							<option value='rescue'>rescue</option>
							<option value='earthquake'>earthquake</option>
						</select>
					</div>

					<div className='visitor-textarea'>
						<textarea
							onChange={(e) => setSituation(e.target.value)}
							placeholder='additional information'
							required
							type='text'
							value={situation}
							rows='4'
							cols='10'
						></textarea>
					</div>

					<div>EMERGENCY NEED</div>
					
					<div className='emergencyNeedContainer'>
						<div className={responseNeeded === 'police' ? 'responseActive' : 'responseInactive'}
							onClick={
								() => {
									setResponseNeeded('police')
								}} >
							<Image
								className='emergencyIcon'
								webp={require('../assets/police.webp')}
							/>
						</div>

						<div className={responseNeeded === 'ambulance' ? 'responseActive' : 'responseInactive'}
							onClick={
								() => {
									setResponseNeeded('ambulance')
								}} >
							<Image
								className='emergencyIcon'
								webp={require('../assets/ambulance.webp')}
							/>
						</div>

						<div className={responseNeeded === 'fireman' ? 'responseActive' : 'responseInactive'}
							onClick={
								() => {

									setResponseNeeded('fireman')
								}} >
							<Image
								className='emergencyIcon'
								webp={require('../assets/fireman.webp')}
							/>
						</div>

						<div className={responseNeeded === 'rescue' ? 'responseActive' : 'responseInactive'}
							onClick={
								() => {

									setResponseNeeded('rescue')
								}} >
							<Image
								className='emergencyIcon'
								webp={require('../assets/rescue.webp')}
							/>
						</div>

					</div>

					<div>
						<button className='user-visitor-button' type='submit'>SUBMIT</button>
					</div>

				</form>
			</section>

		</div>
	);
};

export default VisitorForm;
