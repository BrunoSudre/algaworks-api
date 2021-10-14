'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cursos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nivel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      porcDesconto: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      precoOriginal: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      precoPromocional: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      urlImagem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Cursos');
  },
};