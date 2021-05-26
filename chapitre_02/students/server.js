
const express = require("express")
const cors = require("cors")
const { studentName } = require("./data.js")

const app = express()
app.use(express.json())
app.use(cors())


const port = 8000


app.get("/students", (req, res) => {

    res.json(studentName)
})


app.post("/students", (req, res) => {
    
    const newStudent = req.body.name
    console.log(newStudent)
    studentName.push(newStudent)
    
    res.json({
        message: "student added first"
    })
})


app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})
