const SalesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('SalesProduct', {
    quantity: { type: DataTypes.INTEGER, allowNull: false },
  }, {
    timestamps: false,
    tableName: 'salesProducts',
    underscored: true,
  });

  salesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products', through: 'SalesProduct', foreignKey: 'productId', otherKey: 'saleId',
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales', through: 'SalesProduct', foreignKey: 'saleId', otherKey: 'productId',
    });
  };

  return salesProduct;
};

module.exports = SalesProduct;
