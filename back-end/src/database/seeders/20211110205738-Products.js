'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Products', [
    {
      id: 1,
      name: "Suco de Laranja Prat's 330ml",
      price: 3.80,
      url_image: 'https://casafiesta.fbitsstatic.net/img/p/suco-prats-laranja-integral-pet-330ml-64883/231751.jpg?w=420&h=420&v=no-change'
    },
    {
      id: 2,
      name: 'Coca-cola 600ml',
      price: 2.99,
      url_image: 'https://casafiesta.fbitsstatic.net/img/p/refrigerante-coca-cola-original-1-5l-85244/250949.jpg?w=250&h=250&v=no-change'
    },
    {
      id: 3,
      name: 'Cerveja Império 600ml',
      price: 6.30,
      url_image: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/87276_Cerveja_Imperio_600ml.jpg'
    },
    {
      id: 4,
      name: 'Jack Daniels 1L',
      price: 75.00,
      url_image: 'https://www.imigrantesbebidas.com.br/bebida/images/products/full/6423_Whiskey_Jack_Daniels_1_L.jpg'
    }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {}); 
  }
};
