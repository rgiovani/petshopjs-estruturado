const { Model, DataTypes } = require('sequelize');

class Fornecedor extends Model {
    static init(sequelize){
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            email: DataTypes.STRING,
            cnpj: DataTypes.STRING,
        }, {
            sequelize,
        })
    }
}

module.exports = Fornecedor;