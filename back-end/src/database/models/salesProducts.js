module.exports = (sequelize, _DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', {},
    { timestamps: false });

    salesProducts.associate = (models) => {
    models.products.belongsToMany(models.sale, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
    models.sale.belongsToMany(models.products, {
      as: 'product',
      through: salesProducts,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
  };

  return salesProducts;
};