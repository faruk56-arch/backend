const express = require("express")
const mongoose = require("mongoose")
const userModel = require("./models/user")
const validation = require("./validation")
// const bcryptjs = require("bcryptjs")
// const jwt = require("jsonwebtoken")
const config = require("./config.js")
const {validationResult } = require("express-validator");
const validate = require("./validation")



mongoose.connect(config.mongoURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log("There was a problem when connection to the database")
    } else {
        console.log("I'm connected to the database")
    }
})

const port = config.port
const app = express()
app.use(express.json())


app.post('/signup',validate, async (req, res) => {


    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                message: "validation error",
                errors: errors.array()
            })
        } else {
            const userInfo = req.body
            userInfo.date = new Date(userInfo.date);

            const newUser = await userModel.create(userInfo)
            console.log("new date", newUser)
            res.json({
                "mesage": "user created", newUser
            })
        }

    } catch (err) {
        console.log(err, "can't sign up")
    }
})


app.listen(port, () => {
    console.log("The server is waiting for requests")
})
