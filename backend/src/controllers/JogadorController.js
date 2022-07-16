const axios = require('axios');
const Jogador = require('../models/Jogador');

module.exports = {
   async store(req, res){
         const { ncep  } = req.body;

        // const jogadorExists = await Jogador.findOne({ name })

         const response = await axios.get(`viacep.com.br/ws/${ncep}/json/`);
        
       const { localidade: cidade, uf: estado, bairro, logradouro } = response.data;

       const jogador = await Jogador.create({
            name,
            nascimento,
            email,
            cep, // : ncep,
            cidade,
            estado,
            bairro,
            logradouro
        })
        
        return res.json(jogador);
    }
};