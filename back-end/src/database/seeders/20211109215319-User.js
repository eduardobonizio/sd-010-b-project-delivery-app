'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
[
  {
    id: 1,
    name: 'Gabriel Essênio',
    email: 'gabriel.essenio@gmail.com',
    password: '123456',
    role: 'customer'
  },
  {
    id: 2,
    name: 'Dennis Marcelo',
    email: 'dennis.marcelo@gmail.com',
    password: '123456',
    role: 'admin'
  },
  {
    id: 3,
    name: 'Huggo Parcelly',
    email: 'huggo.parcelly@gmail.com',
    password: '123456',
    role: 'seller'
  },
  {
    id: 4,
    name: 'Diegho Moraes',
    email: 'diegho.moraes@gmail.com',
    password: '123456',
    role: 'custumer'
  }
]
)
  },

  down: async (queryInterface, _Sequelize) => {
  await queryInterface.bulkDelete('Users', null, {});
  }
};
