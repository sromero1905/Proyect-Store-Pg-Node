const {Sequelize, Model, DataTypes  } = require('sequelize')
const { User, UserSchema, USER_TABLE } = require('./user.model')

const PRODUCT_TABLE = 'products'

const ProductSchema = {
    id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        validate: {
            notEmpty: true,
        }
    },
    name:{
        allowNull:false,
        type: DataTypes.STRING
    },
    description:{
        allowNull:false,
        type:DataTypes.STRING,
        
    },
    price:{
        allowNull: false,
        type:DataTypes.INTEGER,
        
    }, brand:{
        allowNull: false,
        type: DataTypes.STRING
    }
}

class Product extends Model{
    static associate(){
        //models de products
    }
    static config(sequelize){
        return{
        sequelize,
      tableName: PRODUCT_TABLE,
      modelName: "Product",
      timestamps: false
        }
    }
}

module.exports = {Product, ProductSchema,PRODUCT_TABLE}