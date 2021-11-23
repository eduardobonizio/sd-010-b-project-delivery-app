module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts',
    {
      quantity: DataTypes.INTEGER,
    },
    { underscored: true, timestamps: false, tableName: 'salesProducts' });
    salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.products.belongsToMany(models.products, {
      as: 'products',
      through: salesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };
  return salesProducts;
};