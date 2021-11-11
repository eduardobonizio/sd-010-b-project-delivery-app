module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        { name: 'Trybeer Admin', email: 'adm@deliveryapp.com', password: '--adm2@21!!--', role: 'administrator'},
        { name: 'Fulana Pereira', email: 'fulana@deliveryapp.com', password: 'fulana@123', role: 'seller'},
        { name: 'Zé Birita', email: 'zebirita@email.com', password: '1c37466c159755ce1fa181bd247cb925', role: 'customer'},
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
