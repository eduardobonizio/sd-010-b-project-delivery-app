const SalesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    quantity: DataTypes.NUMBER,
  }, {
    timestamps: false,
  });

  return salesProduct;
};

module.exports = SalesProduct;
