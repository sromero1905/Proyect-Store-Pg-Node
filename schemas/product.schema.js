const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().min(3).max(40);
const price = Joi.number().integer().min(10);
const description = Joi.string().max(500);
const brand = Joi.string().max(50);

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description,
  brand: brand.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
  brand: brand,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
