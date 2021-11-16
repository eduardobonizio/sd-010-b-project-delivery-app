module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define('SalesProducts', {
    quantity: DataTypes.INTEGER,
  }, { timestamps: false, tableName: 'salesProducts' });
    

  SalesProduct.associate = (models) => {
    models.Sale.belongsTo(models.Products, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Sale.belongsTo(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  }
  return SalesProduct;
};