module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  });
  User.associate = (models) => {
    User.hasMany(models.sales,
      {
        foreignKey: 'user_id',
      });
  };
  return User;
}