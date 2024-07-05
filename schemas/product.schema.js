const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(40);
const price = Joi.number().integer().min(10);
const description = Joi.string().max(500);
const brand = Joi.string().max(50);
const categoryId = Joi.number().integer()

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  description: description,
  brand: brand.required(),
  categoryId: categoryId.required()
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  description: description,
  brand: brand,
  categoryId
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema }
