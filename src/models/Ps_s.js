const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Ps_s extends Model { }

Ps_s.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_personal: {
            type: DataTypes.INTEGER,
            references: {
                model: 'PersonalServicios',
                key: 'id',
            },
        },
        id_servicio: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Servicios',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'ps_s',
        tableName: 'ps_s',
    }
);

module.exports = Ps_s;