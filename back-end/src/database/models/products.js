const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('Product', {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING(200),
  }, 
  {
    timestamps: false,
    underscored: true,
  });

  // product.associate = (models) => {
  //   product.hasMany(models.Sale, { foreignKey: 'saleId', as: 'sales' });
  // };

  return product;
};

module.exports = Product;