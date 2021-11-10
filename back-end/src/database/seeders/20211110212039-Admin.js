'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Users', [
    {
      id: 1,
      name: 'admin',
      email: 'admin@admin.com',
      password: '654321',
      role: 'administrator'
    },
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', { role: 'administrator' }, {}); 
  }
};
