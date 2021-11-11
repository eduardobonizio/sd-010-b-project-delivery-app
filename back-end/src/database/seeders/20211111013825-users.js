'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
    [
      {
        id: 1,
        name: 'John',
        email: 'john@gmail.com',
        password: '123456789',
        role: 'admin'
      },
      {
        id: 2,
        name: 'John Smith',
        email: 'johnsmith@gmail.com',
        password: '987654321',
        role: 'user',
      },
    ],
    { timestamps: false })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
