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

    static associate(models) {
        this.hasOne(models.Endereco, { foreignKey: 'id_endereco' });
        this.hasOne(models.Telefone, { foreignKey: 'id_telefone' });
    }
}

module.exports = Fornecedor;