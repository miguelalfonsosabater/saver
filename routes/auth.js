const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const Auth = require('../models/Admin');

// Register new admin
router.post('/register', async (request, response) => {

	let hashedPassword = await bcrypt.hash(request.body.password, 10);
	let newAuth = new Auth({
		...request.body,
		password: hashedPassword
	});

	const checkEmail = await Auth.findOne({email: request.body.email});

  if (checkEmail){
    return response.status(404).send({ status: 'Email already used. Use a different email'});
  }else {
    newAuth.save().then( result => {
      response.status(201).send({ status: 'New admin has been registered'});
    });
  };

});

// Admin login
router.post('/login', async (request, response) => {

	const result = await Auth.findOne({ email: request.body.email });

	if (result === null) {
		return response.status(404).send({
			status: 'Invalid email or password',
		});
	}else {
		bcrypt.compare(request.body.password, result.password, (error, match) => {
			if (match) {
				response.status(200).send({
					status: 'Logged in successfully',
					responseType: result.responseType
				});
			} else {
				return response.status(404).send({
					status: 'Invalid email or password',
				});
			}
		});
	}

});

module.exports = router;