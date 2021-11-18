'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('salesProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      quantity: {
        allowNull:false,
        type: Sequelize.INTEGER
      },
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'sales', key: 'id' },
        field: 'sale_id',
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'products', key: 'id' },
        field: 'product_id',
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('saleProducts');
  }
};