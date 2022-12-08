const express = require('express');
const router = express.Router();
const Request = require('../models/Request');

// Create new request
router.post('/create-request', async (request, response) => {

  let newRequest = new Request({ ...request.body, status: 'pending' });
  newRequest.save().then( result => {
      response.status(201).send(result);
  });

});

// Return all requests
router.get('/all-requests', async (request, response) => {

  const result = await Request.find({});
  response.status(200).send(result);

});


// Return all requests under pending status needing ambulance
router.get('/pending-ambulance', async (request, response) => {

  const result = await Request.find({ status: 'pending', responseNeeded: 'ambulance'}).sort({requestCreated: 1});
  response.status(200).send(result);

});

// Return all requests under responding status needing ambulance
router.get('/responding-ambulance', async (request, response) => {

  const result = await Request.find({ status: 'responding', responseNeeded: 'ambulance'}).sort({requestCreated: 1});
  response.status(200).send(result);
  
});

// Return all requests under pending status needing police
router.get('/pending-police', async (request, response) => {

  const result = await Request.find({ status: 'pending', responseNeeded: 'police'}).sort({requestCreated: 1});
  response.status(200).send(result);

});

// Return all requests under responding status needing police
router.get('/responding-police', async (request, response) => {

  const result = await Request.find({ status: 'responding', responseNeeded: 'police'}).sort({requestCreated: 1});
  response.status(200).send(result);
  
});

// Return all requests under pending status needing fireman
router.get('/pending-fireman', async (request, response) => {

  const result = await Request.find({ status: 'pending', responseNeeded: 'fireman'}).sort({requestCreated: 1});
  response.status(200).send(result);

});

// Return all requests under responding status needing fireman
router.get('/responding-fireman', async (request, response) => {

  const result = await Request.find({ status: 'responding', responseNeeded: 'fireman'}).sort({requestCreated: 1});
  response.status(200).send(result);
  
});

// Return all requests under pending status needing rescue
router.get('/pending-rescue', async (request, response) => {

  const result = await Request.find({ status: 'pending', responseNeeded: 'rescue'}).sort({requestCreated: 1});
  response.status(200).send(result);

});

// Return all requests under responding status needing rescue
router.get('/responding-rescue', async (request, response) => {

  const result = await Request.find({ status: 'responding', responseNeeded: 'rescue'}).sort({requestCreated: 1});
  response.status(200).send(result);
  
});


// Update request status to responding using request id
router.put('/responding/:id', (request, response) => {

  const requestId = request.params.id;
  Request.updateOne(
    { _id: requestId },
    { $set: { status: 'responding'} }
  ).then(result => {
    if(result.modifiedCount === 1){
      response.status(200).send({ status: "Request status has been moved to responding" });
    };
  });

});

// Update request status to done using request id
router.put('/done/:id', (request, response) => {

  const requestId = request.params.id;
  Request.updateOne(
    { _id: requestId },
    { $set: { status: 'done'} }
  ).then(result => {
    if(result.modifiedCount === 1){
      response.status(200).send({ status: "Request status has been moved to done" });
    };
  });

});

module.exports = router;