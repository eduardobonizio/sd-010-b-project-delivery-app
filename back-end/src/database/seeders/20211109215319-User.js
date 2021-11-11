'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
[
  {
    id: 1,
    name: 'Gabriel Essênio',
    email: 'gabriel.essenio@gmail.com',
    password: 'senhaSecreta157',
    role: 'customer'
  },
  {
    id: 2,
    name: 'Dennis Marcelo',
    email: 'dennis.marcelo@gmail.com',
    password: 'outraSenhaSecreta',
    role: 'admin'
  },
  {
    id: 3,
    name: 'Huggo Parcelly',
    email: 'huggo.parcelly@gmail.com',
    password: 'senhaHiperMegaSecreta',
    role: 'seller'
  },
  {
    id: 4,
    name: 'Diegho Moraes',
    email: 'diegho.moraes@gmail.com',
    password: 'm1Nh4S3nh4123',
    role: 'custumer'
  }
]
)
  },

  down: async (queryInterface, _Sequelize) => {
  await queryInterface.bulkDelete('users', null, {});
  }
};
