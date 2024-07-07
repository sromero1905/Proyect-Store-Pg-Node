'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Agregar la columna `category_id` a la tabla `products`
    await queryInterface.addColumn('products', 'category_id', {
      type: Sequelize.INTEGER,
      allowNull: true, // Ajusta esto según tu lógica de negocio
      references: {
        model: 'category',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL' // Ajusta esto según tu lógica de negocio
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar la columna `category_id` de la tabla `products`
    await queryInterface.removeColumn('products', 'category_id');
  }
};