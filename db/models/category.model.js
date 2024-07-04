const { Sequelize, DataTypes, Model } = require('sequelize');

const CATEGORY_TABLE = 'category';

const CategorySchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title: {
        allowNull: false,
        type: DataTypes.STRING
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
        field: 'created_at',
        defaultValue: Sequelize.NOW
    }
};

class Category extends Model {
    static associate(models) {
        // Associations can be defined here
    }

    static config(sequelize) {
        return {
            sequelize,
            tableName: CATEGORY_TABLE,
            modelName: 'Category',
            timestamps: false
        };
    }
}

module.exports = { Category, CategorySchema, CATEGORY_TABLE };
