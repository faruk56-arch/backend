const mongoose = require('mongoose')



const userSchema = new mongoose.Schema({
    name: String,
    profilePicture: String,
    created: { type: Date, default: Date.now }
})

const user = mongoose.model('user', userSchema)

module.exports = user