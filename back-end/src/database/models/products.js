module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('products', {
    name: DataTypes.STRING(100),
    price: DataTypes.DECIMAL(4, 2),
    urlImage: {
      field: 'url_image',
      type: DataTypes.STRING(200),
    },
  }, { underscored: true, timestamps: false, tableName: 'products' });
  return Products;
};