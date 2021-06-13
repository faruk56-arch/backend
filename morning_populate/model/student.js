const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    ID: ObjectId,
    firstName: String,
    surname: String,
    address: ObjectId,
    created: { type: Date, default: Date.now }
})

const student = mongoose.model('student',studentSchema)



module.exports = student