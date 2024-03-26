const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Vehiculo extends Model { }

Vehiculo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        placa: {
            type: DataTypes.STRING,
        },
        marca: {
            type: DataTypes.STRING,
        },
        tipo: {
            type: DataTypes.STRING,
        },
        problema: {
            type: DataTypes.STRING,
        },
        estado: {
            type: DataTypes.STRING,
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            references: {
                model: 'cliente',
                key: 'id',
            },
        },

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'vehiculo',
        tableName: 'Vehiculo',
    }
);

module.exports = Vehiculo;