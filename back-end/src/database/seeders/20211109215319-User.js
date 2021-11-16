"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert("users", [
      {
        id: 1,
        name: "Delivery App Admin",
        email: "adm@deliveryapp.com",
        password: "a4c86edecc5aee06eff8fdeda69e0d04",
        role: "administrator",
      }, //senha: md5('--adm2@21!!--')
      {
        id: 2,
        name: "Fulana Pereira",
        email: "fulana@deliveryapp.com",
        password: "3c28d2b0881bf46457a853e0b07531c6",
        role: "seller",
      }, // senha: md5('fulana@123')
      {
        id: 3,
        name: "Cliente Zé Birita",
        email: "zebirita@email.com",
        password: "1c37466c159755ce1fa181bd247cb925",
        role: "customer",
      },
      //md5('$#zebirita#$')
      {
        id: 4,
        name: "teste",
        email: "teste@gmail.com",
        password: "e10adc3949ba59abbe56e057f20f883e",
        role: "custumer",
      },
    ]);
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};