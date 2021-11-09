const User = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING(255),
    email: DataTypes.STRING(255),
    password: DataTypes.STRING(255),
    role: DataTypes.STRING(255),
  }, {
    timestamps: false,
  });

  return user;
};

module.exports = User;
