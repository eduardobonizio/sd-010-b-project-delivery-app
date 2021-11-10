'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      price:{
        allowNull: false,
        type: Sequelize.DECIMAL,
        unique: true,
      },
      url_image:{
        allowNull: true,
        type: Sequelize.STRING,
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('products');
  }
};