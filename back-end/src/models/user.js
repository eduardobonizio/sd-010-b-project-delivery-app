const User = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false },
    password: { type: DataTypes.STRING(255), allowNull: false },
    role: { type: DataTypes.STRING(255), allowNull: false },
  }, {
    timestamps: false,
  });

  user.associate = (models) => {
    user.hasMany(models.Sale, {
      foreignKey: 'user_id', as: 'orders', 
    });
    
    user.hasMany(models.Sale, {
      foreignKey: 'seller_id', as: 'sales', 
    }); 
  };

  return user;
};

module.exports = User;