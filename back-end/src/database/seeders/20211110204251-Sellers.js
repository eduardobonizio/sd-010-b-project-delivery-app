'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [
    {
      name: 'Matheus',
      email: 'matheus@seller.com',
      password: '123456',
      role: 'seller'
    },
    {
      name: 'Flavio',
      email: 'flavio@seller.com',
      password: '123456',
      role: 'seller'
    },
    {
      name: 'Diego',
      email: 'diego@seller.com',
      password: '123456',
      role: 'seller'
    },
    {
      name: 'Joao',
      email: 'joao@seller.com',
      password: '123456',
      role: 'seller'
    },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { role: 'seller' }, {}); 
  }
};
