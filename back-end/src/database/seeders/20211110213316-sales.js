'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        user_id: 3,
        seller_id: 2,
        total_price: 10.50,
        delivery_address: 'Rua aaaa',
        delivery_number: '123456',
        sale_date: Sequelize.literal('CURRENT_TIMESTAMP'),
        status: 'Entregue',
      },
      {
        user_id: 3,
        seller_id: 2,
        total_price: 15.50,
        delivery_address: 'Rua bbbb',
        delivery_number: '123456',
        sale_date: Sequelize.literal('CURRENT_TIMESTAMP'),
        status: 'Preparando',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
