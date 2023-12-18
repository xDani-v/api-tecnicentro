const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RepuestoFactura extends Model { }

RepuestoFactura.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_repuesto: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Repuestos',
                key: 'id',
            },
        },
        id_factura: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Facturas',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'repuesto_factura',
        tableName: 'repuesto_factura',
    }
);

module.exports = RepuestoFactura;