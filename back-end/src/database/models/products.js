const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING(200),
  }, 
  {
    timestamps: false,
    underscored: true,
  });

  // product.associate = (models) => {
  //   product.belongsToMany(models.sale, { foreignKey: 'sale_id', as: 'sales' });
  // };

  return product;
};

module.exports = Product;