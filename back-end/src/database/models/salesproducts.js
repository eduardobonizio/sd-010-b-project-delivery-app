module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('saleProduct', {
    quantity: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'salesProducts',
  });
  salesProduct.associate = (models) => {
    models.product.belongsToMany(models.sale,
      {
        as: 'sales',
        through: salesProduct,
        foreignKey: 'sale_id',
        otherKey: 'product_id',
      }
    );
    models.sale.belongsToMany(models.product,
      {
        as: 'products',
        through: salesProduct,
        foreignKey: 'product_id',
        otherKey: 'sale_id',
      }
    );
  };
  return salesProduct;
};