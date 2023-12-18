const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Login extends Model { }

Login.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        id_empleado: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Empleados',
                key: 'id',
            },
        },
        username: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'login',
        tableName: 'Login',
    }
);

module.exports = Login;