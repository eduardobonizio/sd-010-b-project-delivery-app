const product = (sequelize, DataTypes) => {
  const product = sequelize.define("product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  },{
    timestamps: false,
  });

  product.associate = (models) => {
    product.hasMany(models.salesProducts, 
      { foreignKey: 'id', as: 'product_id' },
    );
  };

  return product;
};

module.exports = product;
