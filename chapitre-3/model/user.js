const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String,
    profilePicture: String,
    created: { type: Date, default: Date.now }
})

const Hero = mongoose.model('Hero', userSchema)

module.exports = Hero