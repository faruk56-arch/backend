const mongoose = require('mongoose')

const adressSchema = new mongoose.Schema({
    ID: ObjectId,
    streetName: String,
    streetNumber: String,
    postCode: String,
    city: String,
    created: { type: Date, default: Date.now }
})

const address = mongoose.model('address',adressSchema)



module.exports = address