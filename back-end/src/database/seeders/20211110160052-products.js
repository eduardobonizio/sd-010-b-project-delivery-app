module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products',
      [
        { name: 'Skol', price: 2.20, url_image: '' },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('products', null, {});
  }
};
