module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING(100),
    price:  DataTypes.DECIMAL(4,2),
    url_image: DataTypes.STRING(200),
  }, { timestamps: false });

  Product.associate = (models) => {
    Product.hasMany(models.SaleProduct, { foreignKey: 'sale_id', as: 'sale'});
  };
  return Product;
};
