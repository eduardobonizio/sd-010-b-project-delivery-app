'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sales', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      sellerId: { 
        allowNull: false,
        type: Sequelize.INTEGER,
        field: 'seller_id',
        references: {
          model: 'Users',
          key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      totalPrice: { 
        allowNull: false,
        type: Sequelize.DECIMAL(9,2),
        field: 'total_price'
      },
      deliveryAddress: { 
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_address'
      },
      deliveryNumber: {
        allowNull: false,
        type: Sequelize.STRING,
        field: 'delivery_number'
      },
      saleDate: { 
        allowNull: false,
        type: Sequelize.DATE,
        field:'sale_date'
      },
      status: { 
        allowNull: false,
        type: Sequelize.STRING
      }
    })
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Sales')
  }
};
