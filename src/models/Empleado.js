const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Empleado extends Model { }

Empleado.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        cedula: {
            type: DataTypes.STRING,
        },
        nombres: {
            type: DataTypes.STRING,
        },
        apellidos: {
            type: DataTypes.STRING,
        },
        titulo: {
            type: DataTypes.STRING,
        },
        fecha_inicio_contrato: {
            type: DataTypes.DATE,
        },
        fecha_fin_contrato: {
            type: DataTypes.DATE,
        },
        sueldo: {
            type: DataTypes.DECIMAL,
        },
        antiguedad: {
            type: DataTypes.INTEGER,
        },
        habilidades: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'empleado',
        tableName: 'Empleados',
    }
);

module.exports = Empleado;