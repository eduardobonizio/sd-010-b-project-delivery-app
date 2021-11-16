'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('sales',
      [{
          id:'1',
          user_id:'1',
          seller_id:'1',
          total_price: '321',
          delivery_address: 'address 1',
          delivery_number: '135',
          sale_date: '10-10-2000',
          status: 'user'
        },
        {
          id: '2',
          user_id: '2',
          seller_id: '2',
          total_price: '320',
          delivery_address: 'address 2',
          delivery_number: '130',
          sale_date: '10-11-2000',
          status: 'user'
        },
        {
          id: '3',
          user_id: '3',
          seller_id: '3',
          total_price: '400',
          delivery_address: 'address 3',
          delivery_number: '132',
          sale_date: '10-12-2000',
          status: 'user'
        }
      ], {
        timestamps: false
      })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('sales', null, {});
  },
};
