const mongoose = require('mongoose');


mongoose.connect("mongodb://localhost:27017/garage", (err) => {
    if (err) {
        console.error(err)
    } else {
        console.log("I'm connected to the database");
    }



    const carSchema = mongoose.Schema({
        marque: String,
        model: String,
        year: Number,
        date: { type: Date, default: Date.now }
    })


    const car = mongoose.model("car", carSchema)

    const deleteCar = async () =>{
        const delMet = await car.deleteMany({marque:"Renault"},{marque:"Renault"})
    }
    

    const updateYear = async () => {
        const year = await car.update({_id:"60be18ad6177157f7b665232"}, {year:2000})


    }

        // const id = "60be18ad6177157f7b665232";
        // console.log("id",id)
        
        // car.findById(id, function (err,car) {
            //     console.log("marque:", `${car.marque} ${car.model}`)
    // })

    // const newCar = new car({
    //     marque: "Renault",
    //     model: "Espace",
    //     year: 1999
    // })

    // const myCar = new car({
    //     marque: "Renault",
    //     model: "Scanic",
    //     year: 2004

    // })
    // const herCar = new car({
    //     marque: "Peugeot",
    //     model: "308",
    //     year: 2017

    // })
    
    
    deleteCar();
})





