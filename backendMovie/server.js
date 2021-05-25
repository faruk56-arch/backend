const express = require("express")
const cors = require("cors")
const { movies } = require("./dataMovies.js")


const app = express()

app.use(cors())

const port = 8001

app.get("/movie", (req, res) => {
    const dataMovies = movies.map(elem => {
        
        return {
            // original_title: elem.result.original_title,
            // poster_path: elem.poster_path,
            // release_date: elem.release_date
        }   
    })
    res.json(movies)
    console.log(dataMovies);
})

app.get("/movies/:euro", (req, res) => {
    const euro = req.params.euro
    const dataMovies = movies.map(elem => {
        
        return {
            // original_title: elem.result.original_title,
            // poster_path: elem.poster_path,
            // release_date: elem.release_date
        }   
    })
    res.json(movies)
    console.log(dataMovies);
})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port " + port);
})
