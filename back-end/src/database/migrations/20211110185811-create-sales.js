'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        allowNull: false,
      },
      seller_id: {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        field: 'seller_id',
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        allowNull: false,
      },
     // seller_id
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sales');
  }
};