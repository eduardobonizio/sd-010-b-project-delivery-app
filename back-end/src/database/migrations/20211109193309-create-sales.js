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
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Users',
          key: 'id'
        }
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'Users',
          key: 'id'
        }
      },
      total_prince: {
        allowNull: false,
        type: Sequelize.DECIMAL(9,2)
      },
      delivery_address: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      delivery_number: {
        allowNull: false,
        type: Sequelize.STRING(50)
      },
      sale_date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Sales');
  }
};
