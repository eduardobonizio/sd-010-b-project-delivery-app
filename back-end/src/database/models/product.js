module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
      name: DataTypes.STRING,
      price: DataTypes.DECIMAL(4, 2),
      password: DataTypes.STRING,
      urlImage: DataTypes.STRING,
    },
    { timestamps: false }
  );

  return Product;
};
