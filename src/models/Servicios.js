const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Servicios extends Model { }

Servicios.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'servicios',
        tableName: 'Servicios',
    }
);

module.exports = Servicios;