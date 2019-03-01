const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 50,
    trim: true
  },
  dateOfBirth: {
    type: Date,
    default: new Date()
  },
  photo: {
    type: String,
    required: true
  },
  hobbies: {
    type: [String]
  }
})

module.exports = mongoose.model('student', studentSchema)
