module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('saleProduct', {
    quantity: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'salesProducts',
  });
  return salesProducts;
};