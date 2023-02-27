'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Sales', [
      {
        id: 1,
        user_id: 1,
        seller_id: 1,
        total_price: 10,
        delivery_adress: 'dhiuewgfi',
        delivery_number: 10,
        sale_date: new Date(),
        status: 'fwe',
      },
      {
        id: 2,
        user_id: 1,
        seller_id: 1,
        total_price: 10,
        delivery_adress: 'dhiuewgfi',
        delivery_number: 10,
        sale_date: new Date(),
        status: 'fwe',
        },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Sales', null, {});
  }
};


