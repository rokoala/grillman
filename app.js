const express = require('express');
const consign = require('consign');
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require("body-parser");

// const index = require('./app/routes/index');
// const hostRoute = require('./app/routes/hostRoute');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

consign().include('./app/routes').into(app);

// app.use('/', index);
// app.use('/host', hostRoute);

// app.use(express.static('public'));

// app.get('*', (req, res) => {
// res.sendFile(path.join(__dirname + '/public/index.html'));
// });

app.listen(PORT, () => {
  console.log('Server listening on port...', PORT);
});