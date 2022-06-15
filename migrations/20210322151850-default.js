'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('rating', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      title: Sequelize.STRING,
      rate: Sequelize.TEXT
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('anime');
  }
};