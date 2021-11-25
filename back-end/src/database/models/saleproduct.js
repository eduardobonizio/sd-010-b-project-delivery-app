const SaleProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("SaleProduct", {
    saleId: { type: DataTypes.INTEGER, primaryKey: true, field: 'sale_id' },
    productId: { type: DataTypes.INTEGER, primaryKey: true, field: 'product_id' },
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'salesProducts',
  });

  SaleProduct.associate = (models) => {
    models.SaleProduct.belongsToMany(models.Product, {
      as: 'products',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  
    models.SaleProduct.belongsToMany(models.Sale, {
      as: 'sales',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  }


  return SaleProduct;
};

module.exports = SaleProduct;
