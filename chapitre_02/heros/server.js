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
    // console.log("superHeros", superHeros);
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


app.post("/heros", transFormName, (req, res, next) => {
    const newHero = req.body
    console.log("newHero:", newHero)

    const heroFound = superHeros.find(element => {
        console.log("heros found", element.name)
        return element.name === newHero.name
    })

    if (heroFound === undefined) {
        console.log("hero not found in the list")
        superHeros.push(newHero)
        res.json({
            message: "hero added"
        })

    } else {
        console.log("hero found in the list")
    }
    next()
})

app.post("/heros/:name/powers",  (req, res) => {
    const powerNames = req.params.name
    // console.log("powers list", req.params.name)
    // console.log("powersss:", req.body.power)
    const heroPowers =  req.body.power

    infoHero = superHeros.find(element => {
        if (element.name.toLowerCase() === powerNames.toLowerCase()) {
            return element.power.push(heroPowers)
        } 
        
        
    })
    res.json({
        message:"power added"
    })
    
})

app.listen(8001, function () {
    console.log("Server started");
});



















// app.post("/heros",  (req, res, next) => {

//     const newHero = req.body
//     console.log("Heros", newHero)
//     superHeros.push(newHero); 
//     res.json({
//         message: "ok hero added "
//         })
//         next();

// })




//1er recuperer le power de l'URL
//2er chercher Le pouvoir de un hero de l'URL

// 3er Envoyer une reponse avec ses pouvoirs






// console.log("hero found in db is ", typeof heroFound)
    // console.log("user entered hero is ", typeof newHero)





