const express = require('express');
const routes = express.Router();

const Cliente = require('./models/Cliente');

routes.get('/', (req, res)=>{
    Cliente.create({nome : "Ronaldo", sobrenome : "Giovani", email : "ronaldogiovani07@gmail.com", cpf : "00000-000"});
    res.render('pages/home')
})

module.exports = routes;