

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongoose_populate', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I am connected to database");
    }
})
