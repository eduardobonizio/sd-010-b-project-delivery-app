'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products',
    [
      {
        id: 2,
        name: 'John Cola',
        price: 45,
        url_image: 'aaaaaaaaaaaaaaaaaaaaaaaa',
      }
    ],
    { timestamps: false })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
