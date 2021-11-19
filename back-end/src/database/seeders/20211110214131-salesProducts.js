'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('salesProducts',
      [{
        sale_id: 1,
        product_id: 2,
        quantity: 5,
      },
      {
        sale_id: 1,
        product_id: 2,
        quantity: 5,
      }
      ], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  }
};
