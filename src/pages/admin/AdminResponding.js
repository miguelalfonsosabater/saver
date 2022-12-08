import React from 'react';

import axios from 'axios';
import { useState, useEffect } from 'react';

import AdminNavigator from './AdminNavigator';
import RequestList from '../../components/RequestList';

import('./AdminResponding.css');

const AdminRespondingPage = () => {
    
	// State
	const [requests, setRequest] = useState([]);

    // Get adminType to limit visibility
	const adminTypeInStorage = localStorage.getItem('adminType');

	useEffect(() => {
		if (adminTypeInStorage === 'ambulance') {
			axios
				.get('http://localhost:8080/api/v1/requests/responding-ambulance')
				.then((response) => {
					setRequest(response.data);
				});
		} else if (adminTypeInStorage === 'police') {
			axios
				.get('http://localhost:8080/api/v1/requests/responding-police')
				.then((response) => {
					setRequest(response.data);
				});
		} else if (adminTypeInStorage === 'rescue') {
			axios
				.get('http://localhost:8080/api/v1/requests/responding-rescue')
				.then((response) => {
					setRequest(response.data);
				});
		} else if (adminTypeInStorage === 'fireman') {
			axios
				.get('http://localhost:8080/api/v1/requests/responding-fireman')
				.then((response) => {
					setRequest(response.data);
				});
		}
	}, []);

	return (
		<div className='dashboardContainer'>
			<AdminNavigator />

			<h3 className='dashboardTitle'> RESPONDING </h3>
			<div className='RequestlistContainer row '>
				{/* RequestList.js component to dynamically render each request. */}
				{requests.map((request) => {
					return (
						<RequestList
							key={request._id}
							id={request._id}
							name={request.name}
							email={request.email}
							situation={request.situation}
							status={request.status}
							longitude={request.longitude}
							latitude={request.latitude}
							responseNeeded={request.responseNeeded}
							requestCreated={request.requestCreated}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default AdminRespondingPage;
