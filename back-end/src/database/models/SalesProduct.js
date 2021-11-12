module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false
  });
  
  SaleProduct.associate = (models) => {
  models.Sale.belongsToMany(models.Product,
    {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'sale_id',
      otherKey: 'productId',
    });

  models.Product.belongsToMany(models.Sale,
    {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'id',
      otherKey: 'saleId',
    });
  }
  return SaleProduct;
}