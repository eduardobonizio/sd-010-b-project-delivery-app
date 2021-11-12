'use strict';

const SaleProduct = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('SaleProduct', {
    quantity: DataTypes.INTEGER,
  },
  { timestamps: false, tableName: 'SalesProducts' });

  saleProduct.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: saleProduct,
      foreignKey: 'product_id',
      otherkey: 'sale_id',
    });

    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: saleProduct,
      foreignKey: 'sale_id',
      otherkey: 'product_id',
    });
  }

  return saleProduct;
};

module.exports = SaleProduct;
