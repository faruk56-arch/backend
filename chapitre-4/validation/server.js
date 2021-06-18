const express = require('express');
const cors = require("cors")
const mongoose = require('mongoose')
const { body, validationResult } = require("express-validator");


const User = require('./src/controllers/user')



mongoose.connect('mongodb://localhost:27017/userDB', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I am connected to database");
    }
})


const app = express();
app.use(cors())
app.use(express.json())
const port = 8000


app.get('/users', async (req, res) => {
    console.log("Im in get user")
    try {
        const userList = await User.find({})
        res.json(userList)
    } catch (err) {
        res.json({
            message: "ok"
        })
    }
})


app.get('/users/username/:name', async (req, res) => {


    const userName = req.params.name
    console.log("I got username", userName)

    try {
        const userFound = await User.find({ name: userName })
        if (userFound) {
            console.log("user found", userFound)
            res.json({
                message: "user found", userFound
            })
        } else {
            console.log("user pas trouvé")
            res.json({
                message: "user not found", userFound
            })
        }
        res.json({
            message: "found username", userName
        })
    } catch (err) {
        console.log("I didn't get username'")
    }

})
app.get('/users/mail/:email', async (req, res) => {
    const userEmail = req.params.email
    console.log("mail trouvé", userEmail)

    try {
        const mailFound = await User.findOne({email: userEmail})
        console.log("got mail", mailFound)
        res.json({
            message:"mail found", mailFound
        })

    } catch (err) {
        console.log("I didn't get email'", userEmail)
    }
})


app.get('/users/:id', async (req, res) => {
    const userID = req.params.id
    console.log("i got ID", userID)

    try {
        const idFounded = await User.find({ _id: userID })

        res.json({
            message: 'ID found', idFounded
        })

    } catch (err) {
        console.log("ID did not found", idFounded)
    }
})



app.post('/users/add',
    body("name").not().isEmpty().trim().escape().isLength({ min: 4, max: 10 }),
    body("email").isEmail().normalizeEmail(),
    body("age").toInt().isLength({ min: 1, max: 2 }),
    body("city").not().isEmpty().trim().isLength({ min: 3, max: 25 }),
    async (req, res, next) => {

        try {

            console.log("I am newUser Post");
            const reqBody = req.body;
            console.log(reqBody)

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.json({
                    message: "validation error",
                    errors: errors.array()
                })

            } else {
                next()
            }

        } catch (err) {

            res.json({
                message: "Error while validating the request"
            })
        }
    }, async (req, res) => {
        try {

            const newuser = req.body
            console.log("newuser", newuser)
            const newUser = await User.create(newuser)

            res.json({
                message: "New user added"
            })
        } catch (err) {

            console.log("Something went wrong while adding new user", error)
        }

    })




app.listen(port, () => {
    console.log("The server is listing in the port: ", port)
})


















// app.get('/users/:email', async (req, res) => {

//     try {
//         console.log("I got mail")
//         res.json({
//             message: "found mail"
//         })
//     } catch (err) {
//         console.log("i didn't get mail'")
//     }

// })