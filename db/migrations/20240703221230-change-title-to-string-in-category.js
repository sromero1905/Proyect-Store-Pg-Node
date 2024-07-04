'use strict';

const { DataTypes } = require('sequelize')
const {CATEGORY_TABLE }= require('../models/category.model')

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.changeColumn(CATEGORY_TABLE, 'title', {
      type: DataTypes.STRING,
      allowNull: false
    });
  },

  down: async (queryInterface) => {
   //
  }
};