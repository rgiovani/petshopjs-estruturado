const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);
const Cliente = require('../models/Cliente');
Cliente.init(connection);

module.exports = connection;