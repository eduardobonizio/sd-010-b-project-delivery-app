'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("salesProducts", [
      { 
        sale_id: 1,
        product_id: 2,
        quantity: 2,
      },
      { 
        sale_id: 1,
        product_id: 3,
        quantity: 2,
      },
      { 
        sale_id: 1,
        product_id: 4,
        quantity: 2,
      },
      { 
        sale_id: 2,
        product_id: 8,
        quantity: 2,
      },
      { 
        sale_id: 2,
        product_id: 9,
        quantity: 2,
      },
      { 
        sale_id: 2,
        product_id: 10,
        quantity: 2,
      },      
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("salesProducts", null, {});
  }
};
