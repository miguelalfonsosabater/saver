const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
  name: String,
  email: String,
  contactNumber: String,
  situation: String,
  status: String,
  latitude: String,
  longitude: String,
  emergencyType: String,
  responseNeeded: String
  },
  { timestamps: {
      createdAt: 'requestCreated',
      updatedAt: false},
    versionKey: false 
  }
);

module.exports = mongoose.model('Request', RequestSchema);