const SaleProduct = (sequelize, DataTypes) => {
  const SaleProduct = sequelize.define("SaleProduct", {
    saleId: { type: DataTypes.INTEGER, primaryKey: true },
    productId: { type: DataTypes.INTEGER, primaryKey: true },
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  SaleProduct.associate = (models) => {
    models.SaleProduct.belongsToMany(models.Product, {
      as: 'Products',
      through: SaleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  
    models.SaleProduct.belongsToMany(models.Sale, {
      as: 'Sales',
      through: SaleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  }


  return SaleProduct;
};

module.exports = SaleProduct;
