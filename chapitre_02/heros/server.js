const express = require("express")
const cors = require("cors")
const { superHeros } = require("./data.js")

const app = express()
const port = 8001;


const debug = (req, res, next) => {
    console.log("je recois une requete")
    next();
}
const transFormName = (req, res, next) => {
    if (req.body.name) {
        req.body.name = req.body.name.toLowerCase()
    }
    next()
}

app.use(express.json())
app.use(cors())
app.use(debug)
app.use(transFormName)



app.get("/heros", function (req, res) {
    // console.log("home");
    console.log("superHeros", superHeros);
    res.json(superHeros);
});
// 1er etape de recuperer le nom de l'URL 
// 2eme etape chercher le hero avec le nom de l'url 
// Envoyer une reponse avec un super hero
app.get("/heros/:name", function (req, res) {
    const heroName = req.params.name;
    const found = superHeros.find(element => element.name === heroName)
    res.json(found)
    // res.json et res.send 2 methode 
})



app.get("/heros/:name/powers", function (req, res) {
    const herPower = req.params.name;
    const hisPower = superHeros.find(element => element.name === herPower)
    res.json(hisPower.power)
})




app.post("/heros", transFormName, (req, res) => {
    // console.log("message",req.body)

    const newHero = req.body
    console.log("Heros", newHero)
    superHeros.push(newHero);

    res.json({
        message: "ok hero added "
    })

})




app.post("/heros/:name/powers", (req, res) => {

    const heroName = req.params.name
    // je recupere les nome de hero

    const heroPowers = req.body.power
    // je recupere les powers
    // console.log("powers:", heroPowers)


    infoHero = superHeros.find(hero => {
        //Ici je cherche un hero

        if (hero.name === heroName) {
            return hero
            // Je retourne unn hero
        }
    })

    console.log("infoHero", infoHero)

    // console.log("Power", infoHero.power)

    infoHero.power.push(heroPowers)
    // Je ajoute un power à un Hero

    res.json({
        message: "power added"
    })

})

app.listen(8001, function () {
    console.log("Server started");
});


















//1er recuperer le power de l'URL
//2er chercher Le pouvoir de un hero de l'URL

// 3er Envoyer une reponse avec ses pouvoirs






// console.log("hero found in db is ", typeof heroFound)
    // console.log("user entered hero is ", typeof newHero)




