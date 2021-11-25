module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts',
    { quantity: DataTypes.INTEGER },
    { 
      underscored: true,
      timestamps: false,
      tableName: 'sales_products',
    },
  );

  SalesProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
      underscored: true,
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
      underscored: true,
    });
  };

  return SalesProducts;
};
