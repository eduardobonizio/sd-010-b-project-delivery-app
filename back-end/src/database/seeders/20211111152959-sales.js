'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales',
    [
      {
        user_id: 1,
        saller_id: 1,
        total_price: 50,
        delivery_address: 'avenida brasil',
        delivery_number: 134,
        sale_date: Date(),
        status: 'entregue'
      },
      {
        user_id: 2,
        saller_id: 2,
        total_price: 50,
        delivery_address: 'avenida brasil',
        delivery_number: 134,
        sale_date: Date(),
        status: 'pendente'
      },
    ],
    { timestamps: false});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
