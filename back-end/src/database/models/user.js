module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    role: { type: DataTypes.STRING, defaultValue: 'user' },
  }, {
    timestamps: false,
    tableName: 'users',
  });

  user.associate = (models) => {
    user.hasMany(models.Sale, {
      as: 'order',
      foreignKey: 'userId' 
    });

    user.hasMany(models.Sale, {
      as: 'sale',
      foreignKey: 'sellerId'
    });
  }
  return user;
};