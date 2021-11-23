'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('salesProducts', [{
      sale_id: 1,
      product_id: 1,
      quantity: 2,
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('salesProducts', null, {});
  }
};
