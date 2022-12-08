const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');

// Return user details using user id
router.get('/:id', async (request, response) => {
  
  const userId = request.params.id;
  const result = await User.findOne(
    { _id: userId }, 
    { password: 0 }
  );
  response.status(200).send(result);

});

// Register new user
router.post('/register', async (request, response) => {

	let hashedPassword = await bcrypt.hash(request.body.password, 10);
	let newUser = new User({
		...request.body,
		password: hashedPassword
	});
  
	const checkEmail = await User.findOne({email: request.body.email});

  if (checkEmail){
    return response.status(404).send({ status: 'Email already used. Use a different email'});
  }else {
    newUser.save().then( result => {
      response.status(201).send({ status: 'New user has been registered'});
    });
  };

});

// User login
router.post('/login', async (request, response) => {

	const result = await User.findOne({ email: request.body.email });

	if (result === null) {
		return response.status(404).send({
			status: 'Invalid email or password',
		});
	}else {
		bcrypt.compare(request.body.password, result.password, (error, match) => {
			if (match) {
				response.status(200).send({
					status: 'Logged in successfully',
					id: result._id,
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