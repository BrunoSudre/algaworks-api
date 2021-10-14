const { STRING, INTEGER } = require('sequelize');

const Usuario = (sequelize) => {
    return sequelize.define('Usuario', {
        nome: STRING,
        email: STRING,
        password: STRING,
    })
}

module.exports = Usuario