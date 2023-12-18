const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('data_tecni', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

module.exports = sequelize;