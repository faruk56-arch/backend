const express = require("express")
const mongoose = require("mongoose")
const userModel = require("./models/user")
const validation = require("./validation")
const bcryptjs = require("bcryptjs")
const jwt = require("jsonwebtoken")
const config = require("./config.js")
const { validationResult } = require("express-validator");
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


app.post('/signup', validate, async (req, res) => {

    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                message: "validation error",
                errors: errors.array()
            })
        } else {
            const userInfo = req.body
            const password = bcryptjs.hashSync(req.body.password)
            userInfo["password"] = password
            console.log("userInfo got", userInfo)

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



app.post('/login', async (req, res) => {
    const userEmail = req.body.email;
    const userPassword = req.body.password;
    // console.log("password",userPassword)
    // console.log("userEmail",userEmail)

    try {
        // console.log("givenPasswoed")
        const givenPassword = bcryptjs.hashSync(userPassword)
        // console.log("givenPasswoed", givenPassword)

        const userDetail = await userModel.find({ email: userEmail })
        // console.log("userDetail", userDetail)

        const isValidUser = bcryptjs.compareSync(userPassword, givenPassword)
        // console.log("isValidUser",isValidUser)


        if (isValidUser) {
            const validToken = await jwt.sign({
                id: userDetail.id
            }, "secret", {
                expiresIn: "300s"

            })
            // console.log("validToken", validToken)

            res.json({ mesage: `${userEmail} is  logged in`, validToken })
        } else {
            res.json({ message: `${userEmail} is not identified user` })
        }

    } catch (error) {
        res.json({
            message: "something went wrong"
        })
    }
})

app.listen(port, () => {
    console.log("The server is waiting for requests")
})




// try {
//     const foundPasswords = bcrypt.compareSync(logPass,password)
//     console.log("foundPasswords",foundPasswords)
//     if (foundPasswords) {
//         const token = jwt.sign(
//             {
//                 id: user._id
//             }, config.secret,
//             {
//                 expiresIn: 60 * 60
//             })
//         res.json({ message: "you are now login" })
//     } 
// }

// catch (error) {
//     res.status(500).json({ message: "There was an error while treating the request" })
// }