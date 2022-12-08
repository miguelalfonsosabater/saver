import React, { useRef } from 'react';
import { MapContainer, Marker, TileLayer, Popup } from 'react-leaflet';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import axios from 'axios';

import AdminNavigator from './AdminNavigator';

import('./AdminRequestDetails.css');


const AdminRequestDetails = () => {
	const form = useRef();

	// Hook
	const navigate = useNavigate();
	const location = useLocation();
	const currentRequest = location.state.props;
	console.log(currentRequest);

	// User Location
	const userLocation = [currentRequest.latitude, currentRequest.longitude];

	const onSubmitHandler = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_1umx2et',
				'template_tudt28r',
				form.current,
				'yDJEKy8bdwt-hIfM9'
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);

		axios
			.put(
				`http://localhost:8080/api/v1/requests/responding/${currentRequest.id}`
			)
			.then((response) => {
				alert(response.data.status);
			});

		navigate('/admin-dashboard');
		// window.location.reload();
	};

	const onDoneHandler = (e) => {
		e.preventDefault();

		axios
			.put(`http://localhost:8080/api/v1/requests/done/${currentRequest.id}`)
			.then((response) => {
				alert(response.data.status);
			});

		navigate('/admin-responding');
		// window.location.reload();
	};

	return (
		<div className='AdminRequestDetailsContainer'>

			<AdminNavigator />

			<h2 className='emergencyType'>ACCIDENT</h2>
			<h3 className='requestorsName'>NEED: {currentRequest.responseNeeded.toUpperCase()}</h3>

			<MapContainer center={userLocation} zoom={12} maxZoom={19}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
				/>
				<Marker key={'jeepstation'} position={userLocation}>
					<Popup>{currentRequest.name}</Popup>
				</Marker>
			</MapContainer>

			<h2 className='emergencyNeed'>
			{currentRequest.name.toUpperCase()}
			</h2>

			<p className='admin-requestDetails'>Situation: {currentRequest.situation}</p>

			<p className='admin-requestDate'>{currentRequest.requestCreated.slice(0, 10)}</p>

			<form ref={form} onSubmit={(e) => onSubmitHandler(e)}>
				<input
					style={{ display: 'none' }}
					type='text'
					name='request_name'
					defaultValue={currentRequest.name}
				/>
				<input
					style={{ display: 'none' }}
					type='email'
					name='request_email'
					defaultValue={currentRequest.email}
				/>

				{currentRequest.status === 'pending' && (
					<button
						className='RespondBtn'
						type='submit'
					>
						RESPOND
					</button>
				)}
			</form>

			{currentRequest.status === 'responding' && (
				<button
					className='RespondBtn'
					type='button'
					onClick={(e) => {
						onDoneHandler(e);
					}}
				>
					DONE
				</button>
			)}
		</div>
	);
};

export default AdminRequestDetails;
