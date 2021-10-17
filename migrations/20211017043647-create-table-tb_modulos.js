'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('tb_modulos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      curso_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'tb_cursos',
          },
          key: 'id',
        },
        allowNull: false,
        onDelete: 'CASCADE',
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      carga_horaria: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tb_modulos');
  },
};