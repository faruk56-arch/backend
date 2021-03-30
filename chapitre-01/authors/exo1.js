
const express = require('express');
const port = 8000;

const app = express();


app.get('/', (req, res) => {
  res.send('Authors API');
});


app.listen(port, () => {
  console.log('Server started on port: ' + port);
});