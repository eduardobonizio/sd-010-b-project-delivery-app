"use strict";

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          id: 1,
          name: "Coca cola",
          price: 45,
          url_image: "sduifduisfhduis",
        },
        {
          name: "Fanta",
          price: 80,
          url_image: "bnmbmnbmnbmbnmbn",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
