const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, _DataTypes) => {
  const SalesProduct = sequelize.define(
    "SalesProduct",
    {
      quantity: DataTypes.INTEGER,
    },
    { timestamps: false }
  );

  SalesProduct.associate = (models) => {
    models.Sale.belogsToMany(models.Product, {
      as: "products",
      through: SalesProduct,
      foreignKey: "sale_id",
      otherKey: "product_id",
    });
    models.Product.belogsToMany(models.Sale, {
      as: "sales",
      through: SalesProduct,
      foreignKey: "product_id",
      otherKey: "sale_id",
    });

  };

  return SalesProduct;
};
