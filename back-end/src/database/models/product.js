const Product = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING(200),
  }, {
    timestamps: false,
  }
  );

  Product.associate = (models) => {
    Product.belongsTo(models.Sale, { through: 'SalesProducts' });
  };

  return Product;
};

module.exports = Product;