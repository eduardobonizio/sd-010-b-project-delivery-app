module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Product', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    url_image: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'products'
  });

  return User;
};
