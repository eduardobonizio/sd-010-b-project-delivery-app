const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4,2),
    urlImage: { type: DataTypes.STRING(200), field: 'url_image' }
  }, {
    timestamps: false,
  });

  // Product.associate = (models) => {
  //   Product.belongsTo(models.Sale, { through: 'SalesProducts' });
  // };

  return Product;
};

module.exports = Product;