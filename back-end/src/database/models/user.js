module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',{
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  });
   User.associate = (models) => {
    User.hasMany(models.Sale, {
      foreignkey: 'user_id', as: 'user'
    });
    User.hasMany(models.Sale, {
      foreignkey: 'seller_id', as: 'seller'
    });
  }
  return User;
};