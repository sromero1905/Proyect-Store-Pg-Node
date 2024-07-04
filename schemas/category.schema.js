const Joi = require('joi');

const id = Joi.number().integer();
const title = Joi.string().min(3).max(50).required();

const getCategorySchema = Joi.object({
  id: id.required()
});

const createCategorySchema = Joi.object({
  title: title
});

const updateCategorySchema = Joi.object({
  title: title
});

module.exports = { getCategorySchema, createCategorySchema, updateCategorySchema };
