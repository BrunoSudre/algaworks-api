const { STRING, DOUBLE } = require("sequelize");
const Curso = (sequelize) => {
    return sequelize.define('Curso', {
        nome: STRING,
        descricao: STRING,
        nivel: STRING,
        porcDesconto: DOUBLE,
        precoOriginal: DOUBLE,
        precoPromocional: DOUBLE,
        urlImagem: STRING,
    })
}

module.exports = Curso