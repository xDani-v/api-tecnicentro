const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ClienteVehiculo extends Model { }

ClienteVehiculo.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_cliente: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Clientes',
                key: 'id',
            },
        },
        id_vehiculo: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Vehiculo',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'cliente_vehiculo',
        tableName: 'cliente_vehiculo',
    }
);

module.exports = ClienteVehiculo;