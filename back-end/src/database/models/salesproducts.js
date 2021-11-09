module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SaleProduct', {
    quantity: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'SalesProducts',
  });
  return SalesProducts;
};