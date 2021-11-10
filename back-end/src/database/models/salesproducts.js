const sales = require("./sales");

module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('saleProduct', {
    quantity: DataTypes.INTEGER
  }, {
    timestamps: false,
    tableName: 'salesProducts',
  });
  salesProducts.associate = (models) => {
    models.sales.belongsToMany(models.sales,
      {
        as: 'sales',
        through: salesProducts,
        foreignKey: 'sale_id',
        otherKey: 'product_id',
      }
    );
    models.products.belongsToMany(models.products,
      {
        as: 'products',
        through: salesProducts,
        foreignKey: 'product_id',
        otherKey: 'sale_id',
      }
    );
  };
  return salesProducts;
};