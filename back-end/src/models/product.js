const Product = (sequelize, DataTypes) => {
const product = sequelize.define('product', {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    urlImage: {
      type: DataTypes.STRING(200),
      field: 'url_image',
    },
  }, {
    timestamps: false,
  });

  return product;
};

module.exports = Product;
