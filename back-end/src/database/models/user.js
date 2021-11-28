const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: { type: DataTypes.STRING(255), allowNull: false },
    email: { type: DataTypes.STRING(255), allowNull: false },
    password: { type: DataTypes.STRING(255), allowNull: false },
    role: { type: DataTypes.STRING(255), allowNull: false },
  }, {
    timestamps: false,
    tableName: 'users',
  });

  user.associate = (models) => {
    user.hasMany(models.Sale, {
      foreignKey: 'user_id', as: 'users', 
    });
  };

  return user;
};

module.exports = User;
