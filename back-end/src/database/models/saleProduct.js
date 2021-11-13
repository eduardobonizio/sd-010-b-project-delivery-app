module.exports = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('salesProducts', {
    saleId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.STRING,
    }, { timestamps: false, underscored: true, freezeTableName:true },
  );

  saleProduct.associate = (models) => {
    models.sale.belongsToMany(models.product, {
      as: 'products',
      through: saleProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.product.belongsToMany(models.sale, {
      as: 'sales',
      through: saleProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return saleProduct;
};
