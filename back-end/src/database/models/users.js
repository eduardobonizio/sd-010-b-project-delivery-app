module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define('users',{
    name: DataTypes.STRING(255),
    email: { type: DataTypes.STRING(255), unique: true },
    password: DataTypes.STRING(255),
    role: DataTypes.STRING(255),
  }, { underscored: true, timestamps: false });
   Users.associate = (models) => {
    Users.hasMany(models.sales, {
      foreignkey: 'userId', as: 'user'
    });
    Users.hasMany(models.sales, {
      foreignkey: 'sellerId', as: 'seller'
    });
  }
  return Users;
};