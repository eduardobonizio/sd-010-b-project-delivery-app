module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING,
    email: {type: DataTypes.STRING, unique: true},
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    timestamp: false,
    tableName: 'users',
  });
  return user;
};