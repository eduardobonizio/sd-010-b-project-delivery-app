module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'salesProducts',
  });

  SalesProducts.associate = function (models) {
    models.sales.hasMany(models.salesProducts, {
      foreignKey: 'sale_id',
      as: 'products',
    });

    models.products.hasMany(models.salesProducts, {
      foreignKey: 'product_id',
      as: 'sales',
    });
  };
  return SalesProducts;
};
