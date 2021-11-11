'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('users', [
    {
      id: 8,
      name: 'Matheus',
      email: 'matheus@customer.com',
      password: '123456',
      role: 'customer'
    },
    {
      id: 9,
      name: 'Flavio',
      email: 'flavio@customer.com',
      password: '123456',
      role: 'customer'
    },
    {
      id: 10,
      name: 'Diego',
      email: 'diego@customer.com',
      password: '123456',
      role: 'customer'
    },
    {
      id: 11,
      name: 'Joao',
      email: 'joao@customer.com',
      password: '123456',
      role: 'customer'
    },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', { role: 'customer' }, {}); 
  }
};