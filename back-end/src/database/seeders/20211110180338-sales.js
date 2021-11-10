'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('sales', [{
      id: 1,
      user_id: 1,
      seller_id: 2,
      total_price: 89.90,
      delivery_address: 'Rua Laranja',
      delivery_number: 2,
      status: 'enviado',
      sale_date: '2038-01-19 03:14:07',
      createdAt: '2038-01-19 03:14:07',
      updatedAt: '2038-01-19 03:14:07'
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
