'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Juca',
      email: 'juca.a@juca.com',
      password: '12345678',
      role: 'cliente',
      createdAt: '2038-01-19 03:14:07',
      updatedAt: '2038-01-19 03:14:07'
    },{
      id: 2,
      name: 'Tereza',
      email: 'tereza.a@juca.com',
      password: '12345678',
      role: 'admin',
      createdAt: '2038-01-19 03:14:07',
      updatedAt: '2038-01-19 03:14:07'
    }], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
