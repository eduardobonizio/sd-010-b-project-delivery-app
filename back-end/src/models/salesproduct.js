const SalesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    quantity: DataTypes.NUMBER,
  }, {
    timestamps: false,
  });

  SalesProduct.associate = (models) => {
    SalesProduct.belongsTo(models.Product, {
      foreignKey: 'id', as: 'product_id',
    });
  };

  return salesProduct;
};

module.exports = SalesProduct;
