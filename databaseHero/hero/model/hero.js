const mongoose = require('mongoose')
// Import mongoose


 //Creation de schema 
 // Creer les cles  de schema et definir le type de leur valeur  
const heroSchema = new mongoose.Schema({
    name: String,
    powers:[String],
    color: String,
    isAlive: Boolean,
    age: Number,
    image: String,
    created: { type: Date, default: Date.now }
})

// Creation de model
const Hero = mongoose.model('Hero', heroSchema)

// Expoter le module
module.exports = Hero