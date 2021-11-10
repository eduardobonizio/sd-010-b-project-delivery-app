const Product = (sequelize, DataTypes) => {
  const User = sequelize.define("Product", {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING(200),
  });

  Product.associate = (models) => {
    Product.belongsTo(models.Sale, { through: 'SalesProducts' });
  };

  return User;
};

module.exports = User;