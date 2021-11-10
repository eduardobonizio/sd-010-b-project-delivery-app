'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Cerveja Beck´s Garrafa 330ml', 
        price: 5.50, 
        url_image: './images/becks_330ml.jpg'
      },
      {
        name: 'Cerveja HEINEKEN Garrafa 600ml', 
        price: 9.90, 
        url_image: './images/heineken_600ml.jpg'
      },
      {
        name: 'Cerveja  skol beats sesnses 269ml', 
        price: 4.19, 
        url_image: './images/skol_beats_senses_269ml.jpg'
      },
      {
        name: 'Cerveja Antarctica Pilsen 300ml',
        price: 1.00, 
        url_image: './images/antarctica_pilsen_300ml.jpg'
      },
    ]);
  
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
