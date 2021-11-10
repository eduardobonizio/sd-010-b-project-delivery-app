module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('user', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    timestamps: false,
    tableName: 'users',
  });

  users.associate = (models) => {
    users.hasMany(models.sales,
      { foreignKey: 'user_id', as: 'users' },
      { foreignKey: 'seller_id', as: 'sellers' }
    );
  };
  return users;
};