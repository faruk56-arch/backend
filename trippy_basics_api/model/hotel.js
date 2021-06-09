const mongoose = require('mongoose')

const hotelSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    stars: Number,
    hasSpa: Boolean,
    hasPool: Number,
    priceCategory: Number,
    created: { type: Date, default: Date.now }
})

const hotel = mongoose.model('hotel', hotelSchema)



module.exports = hotel