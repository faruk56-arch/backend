const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
    firstName: String,
    surname: String,
    date: Date
})

const userModel = mongoose.model("User", userSchema)

module.exports = userModel