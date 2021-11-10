const Product = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: { type: DataTypes.STRING(100), allowNull: false },
    price: { type: DataTypes.DECIMAL(4, 2), allowNull: false },
    urlImage: { type: DataTypes.STRING(200), allowNull: false },
  }, {
    timestamps: false,
    underscored: true,
  });

  return product;
};

module.exports = Product;
