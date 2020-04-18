const express = require('express');
const routes = express.Router();

const Cliente = require('./models/Cliente');
const Endereco = require('./models/Endereco');
const Fornecedor = require('./models/Fornecedor');
const Telefone = require('./models/Telefone');

routes.get('/', async (req, res)=>{
    res.render('pages/home');
})

routes.get('/cliente', async (req, res)=>{
    {/* isso é uma instancia do objeto e ao mesmo tempo persistindo no banco de dados */}
    const clientes = await Cliente.findAll();
    
    res.render('pages/cliente', {
        clientes:  clientes
    });
})

routes.get('/fornecedor', async (req, res)=>{
    const fornecedores = await Fornecedor.findAll();
    
    res.render('pages/fornecedor', {
        fornecedores:  fornecedores
    });
})


routes.get('/endereco', async (req, res)=>{
    const enderecos = await Endereco.findAll();
    
    res.render('pages/endereco', {
        enderecos:  enderecos
    });
})

routes.get('/telefone', async (req, res)=>{
    const telefones = await Telefone.findAll();
    
    res.render('pages/telefone', {
        telefones:  telefones
    });
})

routes.get('/clienteForm', (req, res)=>{
    res.render('pages/clienteForm');
})

routes.get('/fornecedorForm', (req, res)=>{
    res.render('pages/fornecedorForm');
})

routes.get('/telefoneForm', (req, res)=>{
    res.render('pages/telefoneForm');
})

routes.get('/enderecoForm', (req, res)=>{
    res.render('pages/enderecoForm');
})

routes.post('/Cliente/add', async(req,res)=>{
    let {nome, sobrenome, email, cpf} = req.body;
    const clientes = await Cliente.create({nome, sobrenome, email, cpf});
    res.redirect('/cliente');
})

routes.post('/Telefone/add', async(req,res)=>{
    let {ddi, ddd, numero, descricao} = req.body;
    const telefones = await Telefone.create({ddi, ddd, numero, descricao});
    res.redirect('/telefone');
})

routes.post('/Fornecedor/add', async(req,res)=>{
    let {nome, sobrenome, email, cnpj} = req.body;
    const fornecedores = await Fornecedor.create({nome, sobrenome, email, cnpj});
    res.redirect('/fornecedor');
})

routes.post('/Endereco/add', async(req,res)=>{
    let {rua, numero, bairro, cep, cidade, estado, complemento} = req.body;
    const enderecos = await Endereco.create({rua, numero, bairro, cep, cidade, estado, complemento});
    res.redirect('/endereco');
})

routes.delete("/Cliente/:id", async (req, res) => {
    await Cliente.destroy({where:{id:req.params.id}})
    .then((clienteDeletar) => {
      res.json(clienteDeletar);
    })
    res.redirect('/cliente');
});


routes.delete('/Cliente/delete', async(req,res)=>{
    let {nome, sobrenome, email, cpf} = req.body;
    const clientes = await Cliente.destroy({id});
    
})

module.exports = routes;