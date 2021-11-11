module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {
    quantity: { type: DataTypes.INTEGER}
  },
    { timestamps: false });

    salesProducts.associate = (models) => {
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.sale.belongsToMany(models.product, {
      as: 'product',
      through: salesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return salesProducts;
};