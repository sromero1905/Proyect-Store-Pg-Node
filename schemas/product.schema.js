const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const description = Joi.string().max(500);
const brand = Joi.string().max(50); // Añade validación para brand

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description,
  brand: brand.required(), // Añade brand al esquema de creación
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
  brand: brand, // Añade brand al esquema de actualización
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
