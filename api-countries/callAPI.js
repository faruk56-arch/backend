


var request = require('request');

request.get("http://localhost:8000/countries", function (err, res, body) {
    var countries = JSON.parse(body);
				


var countriesNames = countries.map(function(element) {
return element;
})

console.log(countriesNames.reverse());
});



    
// var getCountries = JSON.parse(body);
// // console.log(getCountries);
//        getCountries.map((elem) =>{
//         console.log(elem);
//     });

