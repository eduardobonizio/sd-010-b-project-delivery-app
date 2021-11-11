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
        type: Sequelize.STRING(100),
      },
      price:{
        allowNull: false,
        type: Sequelize.DECIMAL({ precision: 4,scale: 2 }),
      },
      url_image:{
        allowNull: true,
        type: Sequelize.STRING(200),
      },
    })
  },

  down: async (queryInterface, _Sequelize) => {
    return queryInterface.dropTable('products');
  }
};