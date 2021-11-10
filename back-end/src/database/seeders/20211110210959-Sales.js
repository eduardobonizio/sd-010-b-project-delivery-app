'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Sales', [
    {
      id: 1,
      user_id: 6,
      seller_id: 2,
      total_price: 10.00,
      delivery_address: 'Rua null, n undefined',
      delivery_number: 10,
      sale_date: new Date('2021-11-10T20:00:00.000Z'),
      status: 'pending',
    },
    {
      id: 2,
      user_id: 7,
      seller_id: 3,
      total_price: 10.00,
      delivery_address: 'Rua null, n undefined',
      delivery_number: 11,
      sale_date: new Date('2021-11-10T20:00:00.000Z'),
      status: 'pending',
    },
    {
      id: 3,
      user_id: 8,
      seller_id: 4,
      total_price: 10.00,
      delivery_address: 'Rua null, n undefined',
      delivery_number: 12,
      sale_date: new Date('2021-11-10T20:00:00.000Z'),
      status: 'delivered',
    },
    {
      id: 4,
      user_id: 9,
      seller_id: 5,
      total_price: 10.00,
      delivery_address: 'Rua null, n undefined',
      delivery_number: 13,
      sale_date: new Date('2021-11-10T20:00:00.000Z'),
      status: 'preparing',
    }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Sales', null, {}); 
  }
};

