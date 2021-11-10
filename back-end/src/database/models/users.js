module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users',{
    name: DataTypes.STRING(255),
    email: { type: DataTypes.STRING(255), unique: true },
    password: DataTypes.STRING(255),
    role: DataTypes.STRING(255),
  }, { timestamps: false });
   Users.associate = (models) => {
    Users.hasMany(models.sales, {
      foreignkey: 'user_id', as: 'user'
    });
    Users.hasMany(models.sales, {
      foreignkey: 'seller_id', as: 'seller'
    });
  }
  return Users;
};