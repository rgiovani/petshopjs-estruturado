const { Model, DataTypes } = require('sequelize');

class Endereco extends Model {
    static init(sequelize){
        super.init({
            rua: DataTypes.STRING,
            numero: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cep: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            complemento: DataTypes.STRING,
        }, {
            sequelize,
        })
    }
}

module.exports = Endereco;