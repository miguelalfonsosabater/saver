const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const server  = express();
const port = 8080;
 
// Middlewares
server.use( morgan('dev') );
server.use( cors() );
server.use( bodyParser.json() );
server.use( helmet() );
 
// Routes
const AuthRouter = require('./routes/auth');
const UserRouter = require('./routes/users');
const RequestRouter = require('./routes/requests');
 
// Routes
server.use('/api/v1/auth', AuthRouter);
server.use('/api/v1/users', UserRouter);
server.use('/api/v1/requests', RequestRouter);

// Database connection
mongoose.connect('mongodb+srv://thelifesaverdb:thelifesaverdb@cluster0.ezkok6d.mongodb.net/thelifesaverdb');
 
server.get('/', ( request, response ) => {
    response.send(`Welcome to ExpressJS`);
});
 
server.listen(port, () => {
    console.log(`Server running on port ${ port }`);
});