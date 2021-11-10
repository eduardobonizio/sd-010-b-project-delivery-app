module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false });

  user.associate = (models) => {
    user.hasMany(models.Sale, { foreignKey: 'user_id', as: 'user'});
    user.hasMany(models.Sale, { foreignKey: 'seller_id', as: 'seller'});
  };
  return user;
};
