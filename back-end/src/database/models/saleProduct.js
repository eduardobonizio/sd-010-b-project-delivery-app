module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define(
    'SaleProduct', {
      quantity: DataTypes.STRING,
    }, { timestamps: false },
  );

  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'Sales',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'Products',
      through: SaleProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return SaleProduct;
};
