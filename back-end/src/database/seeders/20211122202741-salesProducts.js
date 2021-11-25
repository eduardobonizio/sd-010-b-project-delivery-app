'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => queryInterface.bulkInsert('salesProducts',
  [
    {
      sale_id: 1,
      product_id: 9,
      quantity: 5,
    },
    {
      sale_id: 1,
      product_id: 10,
      quantity: 6,
    },
    {
      sale_id: 1,
      product_id: 11,
      quantity: 4,
    },
    {
      sale_id: 2,
      product_id: 7,
      quantity: 4,
    },
    {
      sale_id: 2,
      product_id: 8,
      quantity: 3,
    },
    {
      sale_id: 3,
      product_id: 2,
      quantity: 3,
    },
    {
      sale_id: 3,
      product_id: 3,
      quantity: 5,
    },
    {
      sale_id: 3,
      product_id: 6,
      quantity: 2,
    },
  ], {}),

  down: async (queryInterface, _Sequelize) => queryInterface.bulkDelete('salesProducts', null, {}),
};
