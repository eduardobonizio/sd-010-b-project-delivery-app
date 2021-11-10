module.exports = (sequelize, _DataTypes) => {
  const SaleProduct = sequelize.define('SaleProduct', {
    quantity: {
      type: DataTypes.INTEGER,
    }
  });
  SaleProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Sale,
    {
      
    })
  }

  return SaleProduct;
}