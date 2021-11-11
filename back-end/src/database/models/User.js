module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  });
  
  // User.associate = (models) => {
  //   User.hasMany(models.Sale, { foreignKey: 'user_id', as: 'users' });
  //   User.hasMany(models.Sale, { foreignKey: 'saller_id', as: 'sallers' });
  // };
  return User;
}