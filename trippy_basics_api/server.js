const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const hotel = require('./model/hotel')

mongoose.connect('mongodb://localhost:27017/hotelDB', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I am connected to database");
    }
})


const port = 8001

const app = express()

app.use(cors())

app.use(express.json())

app.get('/hotels', async (req, res) => {
    const hotels = await hotel.find()
    res.json(hotels)
    
})

app.get('/hotels/:id', async (req, res) => {
    const hotelId = req.params.id
    const hotelIdFound = await hotel.find(hotelId)

    res.json({
        message: "Hotel found"
    })
})



app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})