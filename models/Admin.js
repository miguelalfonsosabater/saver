const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  responseType: String
}, {versionKey: false});

module.exports = mongoose.model('Admin', AdminSchema);