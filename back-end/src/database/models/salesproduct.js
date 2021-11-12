const SalesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', 
  {
    quantity: DataTypes.INTEGER,
  }, { timestamps: false, underscored: true,});
  salesProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, { 
      as: 'products',
      through: salesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.product.belongsToMany(models.sale, { 
      as: 'sales',
      through: salesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };
  return salesProduct;
};

module.exports = SalesProduct;