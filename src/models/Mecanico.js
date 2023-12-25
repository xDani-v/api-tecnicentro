const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Mecanico extends Model { }

Mecanico.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        empleado_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Empleados',
                key: 'id',
            },
        },
        turno: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'mecanico',
        tableName: 'mecanico',
    }
);

module.exports = Mecanico;