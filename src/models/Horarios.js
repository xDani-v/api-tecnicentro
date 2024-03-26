const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Horarios extends Model { }

Horarios.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        hora_entrada: {
            type: DataTypes.STRING,
        },
        hora_salida: {
            type: DataTypes.STRING,
        },
        dias: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'horarios',
        tableName: 'horarios',
    }
);

module.exports = Horarios;