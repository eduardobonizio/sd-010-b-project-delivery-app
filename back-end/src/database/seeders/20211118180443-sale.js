'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("sales", [
      {
        id: 1,
        user_id: 1,
        seller_id: 1,
        total_price: 50.00,
        delivery_address: "aaaaa",
        delivery_number: "222",
        sale_date: "2000/10/01",
        status: "pendente",
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 1,
        total_price: 50.00,
        delivery_address: "aaaaa",
        delivery_number: "222",
        sale_date: "2000/10/01",
        status: "pendente",
      },
      {
        id: 3,
        user_id: 3,
        seller_id: 1,
        total_price: 150.00,
        delivery_address: "aaaaa",
        delivery_number: "222",
        sale_date: "2000/10/01",
        status: "Pendente",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("sales", null, {});
  }
};
