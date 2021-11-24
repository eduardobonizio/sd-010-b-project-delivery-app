module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
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
    user.hasMany(models.sale, {
      foreignKey: 'userId', as: 'user',
    });
    user.hasMany(models.sale, {
      foreignKey: 'sellerId', as: 'seller',
    });
  }

  return user;
};