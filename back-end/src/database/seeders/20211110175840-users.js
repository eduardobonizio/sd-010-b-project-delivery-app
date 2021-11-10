'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Juca',
      email: 'juca.a@juca.com',
      password: '12345678',
      role: 'cliente',
    },{
      id: 2,
      name: 'Tereza',
      email: 'tereza.a@juca.com',
      password: '12345678',
      role: 'admin'
    }], { timestamps: false });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
