module.exports = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define(
    'saleProduct', {
      quantity: DataTypes.STRING,
    }, { timestamps: false },
  );

  saleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'sales',
      through: saleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.product.belongsToMany(models.sale, {
      as: 'products',
      through: saleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return saleProduct;
};
