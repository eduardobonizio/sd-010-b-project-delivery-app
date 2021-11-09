const Product = (sequelize, DataTypes) => {
const product = sequelize.define('product', {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    urlImage: DataTypes.STRING(200),
  }, {
    timestamps: false,
    underscored: true,
  });

  Product.associate = (models) => {
    Product.hasMany(models.SalesProduct, {
      foreignKey: 'id',
      as: 'product_id',
    });
  };

  return product;
};

module.exports = Product;
