module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        { name: 'Trybeer Admin', email: 'adm@deliveryapp.com', password: '--adm2@21!!--', role: 'administrator'},
        { name: 'Fulana Pereira', email: 'fulana@deliveryapp.com', password: 'fulana@123', role: 'seller'},
        { name: 'Zé Birita', email: 'zebirita@email.com', password: '$#zebirita#$', role: 'customer'},
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
