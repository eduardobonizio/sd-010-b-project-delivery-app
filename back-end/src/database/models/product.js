module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING(100),
    price:  DataTypes.DECIMAL(4,2),
    url_image: DataTypes.STRING(200),
  }, { timestamps: false });

  // User.associate = (models) => {
  //   User.hasMany(models.Sale, { foreignKey: 'user_id', as: 'user'});
  //   User.hasMany(models.Sale, { foreignKey: 'seller_id', as: 'seller'});
  // };
  return User;
};
