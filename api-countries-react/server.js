const express = require("express")
const cors = require("cors")
const country = require("./dataCountries.js")

const app = express()

app.use(cors())

const port = 8000

app.get("/countries", (req, res) => {

    res.json({
        country

    })
})
app.get("/countries/:pays", (req, res) => {
    let pays = req.params.pays;
    let villInfo = {}

    for (let i = 0; i < country.length; i++) {

        const dataCountry = country[i];

        if (dataCountry.name.toLowerCase() === pays.toLowerCase()) {

            villInfo = dataCountry;
            console.log("je rentre dans if");

        }

    }
    res.json({
        villInfo

    })

})

app.listen(port, () => {
    console.log("Server à l'écoute dans le port 8000");
})