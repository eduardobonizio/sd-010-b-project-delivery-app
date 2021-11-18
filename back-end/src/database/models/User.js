module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
    scopes: {
      withoutPassword: {
        attributes: { exclude: ['password'] },
      }
    }
  });
  
  User.associate = (models) => {
    User.hasMany(models.Sale, { foreignKey: 'user_id', as: 'users' });
    User.hasMany(models.Sale, { foreignKey: 'seller_id', as: 'sellers' });
  };
  return User;
}

// Agradecimentos >> https://pt.stackoverflow.com/questions/384123/unhandledpromiserejectionwarning-sequelizedatabaseerror-table-salao-users-do