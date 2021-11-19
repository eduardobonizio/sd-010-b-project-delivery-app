const User = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, 
  {
    timestamps: false,
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.sale, { foreignKey: 'user_id', as: 'sales' });
    user.hasMany(models.sale, { foreignKey: 'seller_id', as: 'orders' });
  };

  return user;
};

module.exports = User;