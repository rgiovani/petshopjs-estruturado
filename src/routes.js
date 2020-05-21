const express = require('express');
const routes = express.Router();

const Cliente = require('./models/Cliente');
const Endereco = require('./models/Endereco');
const Fornecedor = require('./models/Fornecedor');
const Telefone = require('./models/Telefone');


//Inicio
routes.get('/', async (req, res)=>{
    res.render('pages/home');
})


//Clientes
routes.get('/clientes', async (req, res)=>{
    {/* isso é uma instancia do objeto e ao mesmo tempo persistindo no banco de dados */}
    const clientes = await Cliente.findAll();
    
    res.render('pages/cliente', {
        clientes:  clientes
    });
})

routes.get('/clienteForm', (req, res)=>{
    res.render('pages/clienteForm');
})

routes.post('/clientes/add', async(req,res)=>{
    let {nome, sobrenome, email, cpf, rua, numeroResidencia, 
        bairro, cep, cidade, estado, complemento, ddi, ddd, numeroTelefone, descricao
    } = req.body;
    // let {rua, numeroResidencia, bairro, cep, cidade, estado, complemento} = req.body;
    // let {ddi, ddd, numeroTelefone, descricao} = req.body;

    const telefone = await Telefone.create({ddi, ddd, numeroTelefone, descricao});
    const endereco = await Endereco.create({rua, numeroResidencia, bairro, cep, cidade, estado, complemento});

//TODO error  UnhandledPromiseRejectionWarning: SequelizeDatabaseError: Field 'numero' doesn't have a default value


    await Cliente.create({
        nome: nome, 
        sobrenome : sobrenome, 
        email : email, 
        cpf : cpf,
        id_endereco : endereco.id,
        id_telefone : telefone.id,
    });
    res.redirect('/clientes');
})

routes.get("/cliente-delete/:id", async (req, res) =>{
    Cliente.destroy({
        where: {'id': req.params.id}
    })
    res.redirect('/clientes');
});

//Fornecedores
routes.get('/fornecedores', async (req, res)=>{
    const fornecedores = await Fornecedor.findAll();
    
    res.render('pages/fornecedor', {
        fornecedores:  fornecedores
    });
})

routes.get('/fornecedorForm', (req, res)=>{
    res.render('pages/fornecedorForm');
})

routes.post('/fornecedores/add', async(req,res)=>{
    let {nome, sobrenome, email, cnpj} = req.body;
    const fornecedores = await Fornecedor.create({nome, sobrenome, email, cnpj});
    res.redirect('/fornecedores');
})

routes.get("/fornecedor-delete/:id", async (req, res) => {
    Fornecedor.destroy({
        where: {'id': req.params.id}
    })
    
    res.redirect('/fornecedores');
});


module.exports = routes;