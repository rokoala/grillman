const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

//Rotas
const index = require('../app/routes/index');
const hostRoute = require('../app/routes/hostRoute');

const PORT = 3000;

app.use('/', index);
app.use('/host', hostRoute);

app.listen(PORT, function () {
  console.log('Server listening on port...', PORT);
});
