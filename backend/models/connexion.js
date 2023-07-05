const Sequelize = require("sequelize");

const sequelize = new Sequelize('projetfilrouge', 'root', 'my-secret-pw', {
    host: 'db',
    user: 'root',
    password: 'my-secret-pw',
    dialect: 'mysql',
    port: 3306
  });

  module.exports = sequelize;