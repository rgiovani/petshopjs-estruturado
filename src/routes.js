const express = require('express');
const routes = express.Router();

const Cliente = require('./models/Cliente');
const Endereco = require('./models/Endereco');
const Fornecedor = require('./models/Fornecedor');
const Telefone = require('./models/Telefone');

routes.get('/', async (req, res)=>{
    {/* isso é uma instancia do objeto e ao mesmo tempo persistindo no banco de dados */}
    const clientes = await Cliente.findAll();
    
    res.render('pages/home', {
        clientes:  clientes
    });
})

routes.get('/fornecedor', async (req, res)=>{
    const fornecedores = await Fornecedor.findAll();
    
    res.render('pages/fornecedor', {
        fornecedores:  fornecedores
    });
})

routes.get('/form', (req, res)=>{
    res.render('pages/form');
})

routes.post('/Cliente/add', async(req,res)=>{
    let {nome, sobrenome, email, cpf} = req.body;
    const clientes = await Cliente.create({nome, sobrenome, email, cpf});
    res.redirect('/');
})

module.exports = routes;