'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales', 
    [
      {
        id: 1,
        user_id: 1,
        seller_id: 3,
        total_price: 7.5,
        delivery_address: 'Av. João da Silva, Bairro - Industrial, Cidade - Rio Branco',
        delivery_number: '375',
        sale_date: new Date('2021-11-09T19:58:00.000Z'),
        status: 'Entregue'
      }
    ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  }
};
