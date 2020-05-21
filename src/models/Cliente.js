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

    static associate(models) {
        this.hasOne(models.Endereco, { foreignKey: 'id_endereco' });
        this.hasOne(models.Telefone, { foreignKey: 'id_telefone' });
    }
}

module.exports = Cliente;