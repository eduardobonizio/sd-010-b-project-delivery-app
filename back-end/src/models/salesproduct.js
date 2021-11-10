const SalesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    timestamps: false,
  });

  salesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products', through: 'SalesProduct', foreignKey: 'sale_id', otherKey: 'product_id',
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales', through: 'SalesProduct', foreignKey: 'product_id', otherKey: 'sale_id',
    });
  };

  return salesProduct;
};

module.exports = SalesProduct;
