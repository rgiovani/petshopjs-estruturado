const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);
const Cliente = require('../models/Cliente');
const Fornecedor = require('../models/Fornecedor');
const Endereco = require('../models/Endereco');
const Telefone = require('../models/Telefone');
Cliente.init(connection);
Fornecedor.init(connection);
Endereco.init(connection);
Telefone.init(connection);

module.exports = connection;