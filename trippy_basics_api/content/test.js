const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const hotel = require('./model/hotel')

mongoose.connect('mongodb://localhost:27017/hotelDB', (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I am connected to database");
    }
})


// pour accéder à votre application depuis l’extérieur, votre application doit avoir une adresse identifiable unique. Ici cette adresse est compléter à l’aide du port. Pour créer un serveur, votre application doit “écouter” un port libre sur votre ordinateur. 
const port = 8001

const app = express()
// Express.js est un framework d’application web flexible. Il permet de créer un simple serveur et bien sur la création d’une API REST.

app.use(cors())
// .use = L'appel à use(cors()) permettra au serveur express de répondre aux demandes de contrôle en amont. Une demande de contrôle en amont est essentiellement une demande OPTION envoyée au serveur avant l'envoi de la demande réelle, afin de demander quelle origine et quelles options de demande le serveur accepte


// cors = CORS (Partage de ressource cross-origin) est un mécanisme qui consiste à transmettre des entêtes HTTP qui déterminent s'il faut ou non bloquer les requêtes à des ressources restreintes sur une page web qui se trouve sur un domaine externe au domaine dont la ressource est originaire.(il controle les requete)
app.use(express.json())
//  express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. This method is called as a middleware in your application using the code: app.use(express.json());
//express.json() est une méthode intégrée à express pour reconnaître l'objet de requête entrant en tant qu'objet JSON. Cette méthode est appelée en tant que middleware dans votre application à l'aide du code : app.use(express.json());


// req c'est une parametre 
// req => un objet contenant les informations de la requête
// res => un objet contenant des méthodes pour renvoyer l’information
//next => une function pour passer au prochain “bloque”
app.get('/hotels', async (req, res) => {
    const hotels = await hotel.find()
    res.json(hotels)
    // quel type de reponse envoi json//
    //json une methode qui envoi une reponse en format json

})
// id
// :le nom de la clé dans l’objet req.params 
// get = Les requêtes GET doivent uniquement être utilisées afin de récupérer des données.
app.get('/hotels/:id', async (req, res) => {
    const hotelId = req.params.id
    const hotelIdFound = await hotel.find(hotelId)


    res.json({
        message: "Hotel found"
    })
})



// La fonction app.listen() est utilisée pour lier et écouter les connexions sur l'hôte(host) et le port 

app.listen(port, () => {
    console.log(`J'écoute des requêtes sur le port ${port}`);
})