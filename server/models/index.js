const mongoose = require('mongoose')

mongoose.set('debug', true)

mongoose.promise = global.Promise
mongoose.connect('mongodb://localhost/students')

module.exports.Student = require('./student')
