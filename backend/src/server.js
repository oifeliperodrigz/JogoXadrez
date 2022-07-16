const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://feliperodrigues:1234@cluster0.anto9.mongodb.net/bancoxadrez?retryWrites=true&w=majority', {
    useNewUrlParser: true
} );

server.use(express.json());
server.use(routes);

server.listen(3333);