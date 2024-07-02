'use strict';
const { ProductSchema, PRODUCT_TABLE } = require('../models/product.model')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn(PRODUCT_TABLE,'category',ProductSchema.category)
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(PRODUCT_TABLE,'category')
  }
};
