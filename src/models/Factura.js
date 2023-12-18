const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Facturas extends Model { }

Facturas.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        vehiculo_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Vehiculo',
                key: 'id',
            },
        },
        mecanico_id: {
            type: DataTypes.INTEGER,
        },
        administrador_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Administradores',
                key: 'id',
            },
        },
        descripcion_danio: {
            type: DataTypes.STRING,
        },
        hora_entrada: {
            type: DataTypes.TIME,
        },
        hora_salida: {
            type: DataTypes.TIME,
        },
        total: {
            type: DataTypes.DECIMAL,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'facturas',
        tableName: 'Facturas',
    }
);

module.exports = Facturas;