'use strict';
const { CategorySchema,CATEGORY_TABLE} = require('../models/category.model')
/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn(PRODUCT_TABLE, 'category_id', {
      field: 'category_id',
      allowNull: false,
      type: Sequelize.INTEGER,
      references: {
        model: CATEGORY_TABLE,
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn(PRODUCT_TABLE, 'category_id');
  }
};
