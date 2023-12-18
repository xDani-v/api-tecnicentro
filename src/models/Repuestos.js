const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Repuestos extends Model { }

Repuestos.init(
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
        cantidad_disponible: {
            type: DataTypes.INTEGER,
        },
        fecha_ingreso: {
            type: DataTypes.DATE,
        },
        precio_unitario: {
            type: DataTypes.DECIMAL,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'repuestos',
        tableName: 'Repuestos',
    }
);

module.exports = Repuestos;