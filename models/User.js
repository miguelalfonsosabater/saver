const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  firstName: String,
  lastName: String,
  contactNumber: String,
  address: String
}, {versionKey: false});

module.exports = mongoose.model('User', UserSchema);