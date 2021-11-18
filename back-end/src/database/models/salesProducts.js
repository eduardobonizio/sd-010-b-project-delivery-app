const SalesProduct = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('salesProducts', 
  {
    quantity: DataTypes.INTEGER,
  }, { timestamps: false, underscored: false,});
  salesProducts.associate = (models) => {
    models.sale.belongsToMany(models.product, { 
      as: 'products',
      through: salesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.product.belongsToMany(models.sale, { 
      as: 'sales',
      through: salesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };
  return salesProducts;
};

module.exports = SalesProduct;