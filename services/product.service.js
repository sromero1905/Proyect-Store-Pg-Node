const { models } = require('./../libs/sequelize')
const boom = require('@hapi/boom');
const sequelize = require('../libs/sequelize');
const { Model } = require('sequelize');


class ProductsService {
  constructor(){}

  async create(data) {
   const newProduct = await models.Product.create(data)
   return newProduct;
  }

  async find() {
    const rta = await models.Product.findAll()
    return rta 
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id)
    if(!user){
      throw boom.notFound('Product not found')
    }
    return product
  }

  async update(id, changes) {
    const product = await this.findOne(id)
    const rta = await user.update(changes)
    return rta
  }

  async delete(id) {
    const product = await this.findOne(id)
    await product.destroy()
    return{ id }
  }

}

module.exports = ProductsService;
