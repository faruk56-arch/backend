

const express = require('express');
const app = express();

var cors = require('cors')
app.use(cors())

const port = 8000;

app.get('/countries', (req, res) => {
  res.send([" france  ",  " germany  ", " england  ",  " belgique ", "suisse", "italie", "japon"]);

});

app.listen(port, () => {
  console.log('Server started on port: ' + port);
});