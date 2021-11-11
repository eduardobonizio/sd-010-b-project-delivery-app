const SalesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', 
  {
    quantity: DataTypes.INTEGER,
  }, { timestamps: false, underscored: true,});
  salesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, { 
      as: 'products',
      through: salesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.Product.belongsToMany(models.Sale, { 
      as: 'sales',
      through: salesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };
  return salesProduct;
};

module.exports = SalesProduct;