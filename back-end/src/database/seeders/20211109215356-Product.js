"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        id: 1,
        name: "Cerveja Beck´s Garrafa 330ml",
        price: 5.5,
        url_image: "./images/becks_330ml.jpg",
      },
      {
        id: 2,
        name: "Cerveja HEINEKEN Garrafa 600ml",
        price: 9.9,
        url_image: "./images/heineken_600ml.jpg",
      },
      {
        id: 3,
        name: "Cerveja  skol beats sesnses 269ml",
        price: 4.19,
        url_image: "./images/skol_beats_senses_269ml.jpg",
      },
      {
        id: 4,
        name: "Cerveja Antarctica Pilsen 300ml",
        price: 1.0,
        url_image: "./images/antarctica_pilsen_300ml.jpg",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
