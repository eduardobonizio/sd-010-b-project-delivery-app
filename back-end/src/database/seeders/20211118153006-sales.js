module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
        user_id: 3,
        seller_id: 2,
        total_price: 16.38,
        delivery_address: 'teste',
        delivery_number : '123',
        status: 'Pendente',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};