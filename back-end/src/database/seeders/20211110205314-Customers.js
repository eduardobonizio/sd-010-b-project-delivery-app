'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [
    {
      id: 6,
      name: 'Matheus',
      email: 'matheus@customer.com',
      password: '123456',
      role: 'customer'
    },
    {
      id: 7,
      name: 'Flavio',
      email: 'flavio@customer.com',
      password: '123456',
      role: 'customer'
    },
    {
      id: 8,
      name: 'Diego',
      email: 'diego@customer.com',
      password: '123456',
      role: 'customer'
    },
    {
      id: 9,
      name: 'Joao',
      email: 'joao@customer.com',
      password: '123456',
      role: 'customer'
    },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { role: 'customer' }, {}); 
  }
};