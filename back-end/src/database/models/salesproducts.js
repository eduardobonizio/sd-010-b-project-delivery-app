'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class salesProducts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  salesProducts.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'salesProducts',
    product_id: { type: DataTypes.INTEGER, foreignKey: true },
    sale_id: { type: DataTypes.INTEGER, foreignKey: true },
  });

  salesProducts.associate = (models) => {
    models.salesProducts.belongsTo(models.products, { foreignKey: 'product_id', as: 'products' });
    models.salesProducts.belongsTo(models.sales, { foreignKey: 'sale_id', as: 'sales' });
  };

  return salesProducts;
};