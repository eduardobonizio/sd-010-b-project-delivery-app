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
  return users;
};