module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define(
    'salesProduct', 
    { quantity: { type: DataTypes.INTEGER} },
    { timestamps: false, underscored: true, tableName: 'salesProducts' },
  );

    salesProducts.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.sale.belongsToMany(models.product, {
      as: 'product',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return salesProducts;
};