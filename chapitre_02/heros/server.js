const express = require("express")
const cors = require("cors")
const { superHeros } = require("./data.js")

const app = express()
const port = 8001;


const debug = (req, res, next) => {
    console.log("je recois une requete")
    next();

}
app.use(express.json())
app.use(cors())
app.use(debug)



app.get("/heros", function (req, res) {
    // console.log("home");
    // console.log("superHeros", superHeros);
    res.json(superHeros);
});
// 1er etape de recuperer le nom de l'URL 
// 2eme etape chercher le hero avec le nom de l'url 
// Envoyer une reponse avec un super hero
app.get("/heros/:name", function (req, res) {
    // res.send(req.params.name)
    const heroName = req.params.name

    const found = superHeros.find(element => element.name === heroName)
    res.json(found)
})


//1er recuperer le power de l'URL
//2er chercher Le pouvoir de un hero de l'URL

// 3er Envoyer une reponse avec ses pouvoirs

app.get("/heros/:name/powers", function (req, res) {
    const herPower = req.params.name 


    const hisPower = superHeros.find(element => element.name === herPower )

    


    res.json(hisPower.power)


    // const heat = superHeros.find(element =>  console.log(element.power)  )
    // console.log("power",heat)
    
    
    
    
    
})

app.listen(8001, function ( ) {
    console.log("Server started");
});





















