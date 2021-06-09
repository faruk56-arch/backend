const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


mongoose.connect('mongodb://localhost:27017/heros',(err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I am connected to database");
    }
})


const heroSchema = mongoose.Schema({
    name: String,
    age: Number,
    date: { type: Date, default: Date.now }
})

const hero = mongoose.model("hero", heroSchema)

const port = 8000

const app = express()

app.use(cors())
app.use(express.json())





app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})