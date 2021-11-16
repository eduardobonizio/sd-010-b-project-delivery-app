module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('SalesProducts', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'salesProducts',
    timestamp: false,
    underscored: true,
  });

  salesProduct.associate = function (models) {
    models.Sale.belongsToMany(models.Product, {
      as: 'product',
      foreignKey: 'productId' ,
      through: salesProduct,
      otherKey: 'saleId'
    });

    models.Product.belongsToMany(models.Sale, {
      as: 'sale',
      foreignKey: 'saleId',
      through: salesProduct,
      otherKey: 'productId' 
    });
  };
  return salesProduct;
};
