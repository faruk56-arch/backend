
const express = require('express');
const port = 8000;

const app = express();


app.get('/json/authors/:id', (req, res) => {
  res.send({
    name: "Lawrence Nowell",
    nationality: "UK"
});
});


app.get('/json/authors/:id/books', (req, res) => {
  res.send({
    books: ["Beowulf"]
  });
});
 
  

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});