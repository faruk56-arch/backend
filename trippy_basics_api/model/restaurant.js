const RestaurantSchema = new mongoose.Schema({

    name: String,
    address: String,
    city: String,
    country: String,
    stars: Number,
    cuisine: String,
    priceCategory: Number,
    created: { type: Date, default: Date.now }

})
const restaurant = mongoose.model('restaurant', RestaurantSchema)
module.exports = restaurant