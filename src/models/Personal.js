const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PersonalServicios extends Model { }

PersonalServicios.init(
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
        cargo: {
            type: DataTypes.STRING,
        },
        id_horario: {
            type: DataTypes.INTEGER,
            references: {
                model: 'horarios',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'personalservicios',
        tableName: 'PersonalServicios',
    }
);

module.exports = PersonalServicios;