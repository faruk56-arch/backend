const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: { type: Number, min: 1, max: 99},
    city: String
});


const User = mongoose.model('user', userSchema)

module.exports = User