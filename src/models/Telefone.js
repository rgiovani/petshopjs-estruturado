const { Model, DataTypes } = require('sequelize');

class Telefone extends Model {
    static init(sequelize){
        super.init({
            ddi: DataTypes.STRING,
            ddd: DataTypes.STRING,
            numero: DataTypes.STRING,
            descricao: DataTypes.STRING,
        }, {
            sequelize,
        })
    }
}

module.exports = Telefone;