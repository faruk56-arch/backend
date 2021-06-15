const express = require('express');
// const multer = require('multer');
const cors = require("cors")

// const fs = require("fs");
// const path = require("path");
const mongoose = require('mongoose')
const {user} = require('./src/controllers/user')



mongoose.connect('mongodb://localhost:27017/userDB', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I am connected to database");
    }
})
// configuration de multer
const upload = multer({ dest: 'public/uploads/' });


const app = express();
app.use(cors())
const port = 8001
app.get('/users', async (req, res) => {
    console.log("got it")
    res.json({ 
        message: "ok"
    })
})
app.listen(port, () => {
    console.log("The server is listing in the port: ", port)
})