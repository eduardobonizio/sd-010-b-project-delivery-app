'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [
    {
      id: 2,
      name: 'Matheus',
      email: 'matheus@seller.com',
      password: '123456',
      role: 'seller'
    },
    {
      id: 3,
      name: 'Flavio',
      email: 'flavio@seller.com',
      password: '123456',
      role: 'seller'
    },
    {
      id: 4,
      name: 'Diego',
      email: 'diego@seller.com',
      password: '123456',
      role: 'seller'
    },
    {
      id: 5,
      name: 'Joao',
      email: 'joao@seller.com',
      password: '123456',
      role: 'seller'
    },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { role: 'seller' }, {}); 
  }
};