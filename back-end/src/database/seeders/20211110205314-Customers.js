'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [
    {
      name: 'Matheus',
      email: 'matheus@customer.com',
      password: '123456',
      role: 'customer'
    },
    {
      name: 'Flavio',
      email: 'flavio@customer.com',
      password: '123456',
      role: 'customer'
    },
    {
      name: 'Diego',
      email: 'diego@customer.com',
      password: '123456',
      role: 'customer'
    },
    {
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