module.exports = (sequelize, DataTypes) => {
  const Sales_Products = sequelize.define('Sales_Products', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  }, {
    tableName: 'sales_products',
  });

  Sales_Products.associate = function (models) {
    Sales.hasMany(models.Sales_Products, {
      foreignKey: 'sale_id',
      as: 'products',
    });

    Products.hasMany(models.Sales_Products, {
      foreignKey: 'product_id',
      as: 'sales',
    });
  };
  return Sales_Products;
};
