'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

     await queryInterface.bulkInsert('sales', [{
      id: 1,
      userId: 1,
      sellerId: 2,
      totalPrice: 89.90,
      deliveryAddress: 'Rua Laranja',
      deliveryNumber: 2,
      status: 'enviado',
      saleDate: '2038-01-19 03:14:07',
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
