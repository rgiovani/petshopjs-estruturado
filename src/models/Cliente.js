const { Model, DataTypes } = require('sequelize');


class Cliente extends Model{
    static init(sequelize){  
        super.init({
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
        }, {
            sequelize,
        })
    }
}

module.exports = Cliente;