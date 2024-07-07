const { User, UserSchema } = require("./user.model");
const { Product, ProductSchema } = require("./product.model");
const { Customer, CustomerSchema } = require("../models/customer.model");
const { Category, CategorySchema } = require('../models/category.model');
const { Order, OrderSchema } = require('../models/order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');
const { Sequelize } = require("sequelize");

function setUpModels(sequelize) {
  // Inicializar modelos
  User.init(UserSchema, User.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Category.init(CategorySchema, Category.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));

  // Asociaciones
  User.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Category.associate(sequelize.models);
  Product.associate(sequelize.models); 
  Order.associate(sequelize.models);
}

module.exports = setUpModels;
