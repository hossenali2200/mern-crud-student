const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  gender: {
    type: String
  },
  dateOfBirth: {
    type: String
  },
  nationality: {
    type: String
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  admissionDate: {
    type: String
  },
  courses: {
    type: String
  },
  phone: {
    type: Number
  }
}, {
    collection: 'students'
  })
module.exports = mongoose.model('Student', studentSchema)