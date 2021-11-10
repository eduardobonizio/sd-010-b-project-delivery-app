'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [{
      id: 1,
      name: 'Coca',
      price: 12.90,
      url_image: 'https://123',
    },{
      id: 2,
      name: 'Pepsi',
      price: 11.90,
      url_image: 'https://124'
    }], { timestamps: false });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
