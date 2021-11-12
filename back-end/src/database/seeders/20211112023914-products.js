'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('products',
    [
      {
        id: 1,
        name: 'John Cola',
        price: 45,
        url_image: 'aaaaaaaaaaaaaaaaaaaaaaaa',
      },
      {
        id: 2,
        name: 'John Peps',
        price: 2,
        url_image: 'bbbbbbbbbbbbbbbbbbbbbbbbbb',
      }
    ],
    { timestamps: false })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
