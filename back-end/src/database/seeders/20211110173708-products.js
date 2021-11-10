'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products', [{
      id: 1,
      name: 'Coca',
      price: 12.90,
      url_image: 'https://123',
      createdAt: '2038-01-19 03:14:07',
      updatedAt: '2038-01-19 03:14:07'
    },{
      id: 2,
      name: 'Pepsi',
      price: 11.90,
      url_image: 'https://124',
      createdAt: '2038-01-19 03:14:07',
      updatedAt: '2038-01-19 03:14:07'
    }], { timestamps: false });
   
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
