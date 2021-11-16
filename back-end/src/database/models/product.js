module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING(100),
    price:  DataTypes.DECIMAL(4,2),
    url_image: DataTypes.STRING(200),
  }, { timestamps: false });

  return product;
};
