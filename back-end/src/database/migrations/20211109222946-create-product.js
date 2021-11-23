'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(4,2)
      },
      urslImage: {
        allowNull: false,
        type: Sequelize.STRING(200),
        field: "url_image",
      }
    });
  },
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('products');
  }
};
