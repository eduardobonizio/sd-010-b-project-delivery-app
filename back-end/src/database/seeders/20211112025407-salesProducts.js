'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('salesProducts',
    [
      {

        quantity: 99,
      },
      {
        quantity: 54,
      },
    ],
    { timestamps: false })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {})
  }
};

// sale_id: 1,
// product_id: 2,

// sale_id: 1,
// product_id: 1,