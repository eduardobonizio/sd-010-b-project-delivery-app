module.exports = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define('SalesProduct', {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false
  });
  
  return SaleProduct;
}