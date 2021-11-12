'use strict';

const SaleProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('SaleProduct', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false });
  saleProduct.associate = (models) => {
    saleProduct.belongsTo(models.products), {
      foreignKey: 'product_id',
      as: 'product'
    }
  }
  return saleProduct;
};
module.exports = SaleProduct;
