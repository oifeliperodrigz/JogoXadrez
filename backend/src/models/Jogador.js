const { Schema, model } = require('mongoose'); 

const JogadorSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    nascimento: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    cep: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    estado: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    logradouro: {
        type: String,
        required: true,
    }
}, {
        timestamps : true,
});

module.exports = model('Jogador', JogadorSchema);