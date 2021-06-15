const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: { type: Number, min: 1, max: 99},
    city: string
});


const user = mongoose.model('user', userSchema)

module.exports = user