'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
        references: {
          model: 'users',
          key: 'id'
        }
      },
      seller_id: {
        type: Sequelize.INTEGER,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE', 
        references: {
          model: 'users',
          key: 'id'
        }
      },
      total_price: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING(100),
      },
      delivery_number: {
        type: Sequelize.STRING(50),

      },
      sale_date: {
        type: Sequelize.DATE,
      },
      status: {
        type: Sequelize.STRING(50),
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('sales');
  }
};
