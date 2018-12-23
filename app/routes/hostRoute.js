// const express = require('express');
// const router = express.Router();
const controller = require('../controllers/hostController')

module.exports = (app) => {

  app.get('/host', controller.get);
  app.get('/host/:id', controller.getById);
  app.post('/host', controller.post);
  app.put('/host/:id', controller.put);
  app.delete('/host/:id', controller.delete);

};