'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_conteudos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      modulo_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tb_modulos',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
      descricao: {
        type: Sequelize.TEXT,
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
    return queryInterface.dropTable('tb_conteudos');
  },
};