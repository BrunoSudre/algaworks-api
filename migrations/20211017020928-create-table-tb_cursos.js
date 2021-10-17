'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_cursos', {
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
        type: Sequelize.TEXT,
        allowNull: false,
      },
      nivel: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      porc_desconto: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      preco_original: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      preco_promocional: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      url_imagem: {
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
    return queryInterface.dropTable('tb_cursos');
  },
};