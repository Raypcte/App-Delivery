'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales_Products', [
      {
        sale_id: 1,
        product_id: 1,
        quantity: 1,
      },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('sales_Products', null, {});
  }
};
