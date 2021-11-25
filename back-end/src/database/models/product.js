module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.DECIMAL(4, 2),
      allowNull: false,
    },
    url_image: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
    },
  }, {
    tableName: 'products',
    timestamps: false,
    underscored: true,
  });
  //   Product.associate = (models) => {
  //   Product.hasOne(models.SalesProducts, { foreignKey:"product_id", as: "products"});
  // };

  return Product;
};