const express = require('express');
const JogadorController = require('./controllers/JogadorController');

const routes = express.Router();

routes.post('/jogadores', JogadorController.store);
   
module.exports = routes;