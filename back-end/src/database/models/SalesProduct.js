module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProduct',
    {
      quantity: DataTypes.INTEGER,
    },
    { timestamps: false, tableName: 'salesProducts' });

  SalesProduct.associate = (models) => {
    models.BlogPost.belongsToMany(models.Sale, {
      as: 'sale',
      through: SalesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.Category.belongsToMany(models.Product, {
      as: 'product',
      through: SalesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return SalesProduct;
}; 