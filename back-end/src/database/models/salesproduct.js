module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProducts', {
    quantity: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'salesProducts' });
    

  SalesProduct.associate = (models) => {
    models.Sale.belongsTo(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'seller_id',
      otherKey: 'id',
    });
    models.Product.belongsTo(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'product_id',
      otherKey: 'id',
    });
  }
  return SalesProduct;
};