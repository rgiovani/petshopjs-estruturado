const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);
const Cliente = require('../models/Cliente');
const Fornecedor = require('../models/Fornecedor');
Cliente.init(connection);
Fornecedor.init(connection);

module.exports = connection;