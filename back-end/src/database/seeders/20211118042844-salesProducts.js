'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('salesProducts',
    [{
      sale_id: 1,
      product_id: 2,
      quantity: 1,
    },
    {
      sale_id: 2,
      product_id: 1,
      quantity: 98,
    }
  ])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  },
};
