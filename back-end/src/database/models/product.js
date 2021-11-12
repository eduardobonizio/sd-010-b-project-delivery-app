'use strict';

const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL(4, 2),
    url_image: DataTypes.STRING,
  },
  { timestamps: false });
  product.associate = (models) => {
    product.belongsTo(models.sales), {
      foreignKey: 'seller_id',
      as: 'sale'
    }
  }
  return product;
};
module.exports = Product;
