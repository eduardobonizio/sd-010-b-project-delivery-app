module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, 
      primaryKey: true, autoIncrement: true, defaultValue: true },
    name: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false, tableName: 'users' });
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