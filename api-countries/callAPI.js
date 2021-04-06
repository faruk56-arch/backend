


var request = require('nodemon');

nodemon.get("http://localhost:8000/countries",  (err, res, body) => {

    var countries = JSON.parse(body);



    var countriesNames = countries.map( (element) => {
        return element;
    })

    console.log(countriesNames.reverse());
});




// var getCountries = JSON.parse(body);
// // console.log(getCountries);
//        getCountries.map((elem) =>{
//         console.log(elem);
//     });

