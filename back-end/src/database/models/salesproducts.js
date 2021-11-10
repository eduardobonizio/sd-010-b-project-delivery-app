const { use } = require("chai");

const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("saleProduct", {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
  },{
    timestamps: false,
  });

  use.associate = (models) => {
    salesProduct.belongsTo(models.products, 
      { foreignKey: 'id', as: 'product_id' },
    );
    salesProduct.belongsTo(models.sales, 
      { foreignKey: 'id', as: 'sale_id' },
    );
  };

  return salesProduct;
};

module.exports = salesProduct;
