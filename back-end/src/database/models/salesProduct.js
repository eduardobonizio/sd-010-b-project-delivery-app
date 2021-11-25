module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('SalesProducts', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'saleProduct',
    timestamps: false,
    underscored: true,
  });

  salesProduct.associate = function (models) {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      
      through: salesProduct,
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: salesProduct,
    });
  };
  return salesProduct;
};
