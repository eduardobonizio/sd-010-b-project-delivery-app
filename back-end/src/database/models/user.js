module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User',{
    name: DataTypes.STRING,
    role: DataTypes.STRING,
    email: { type: DataTypes.STRING, unique: true },
    password: DataTypes.STRING,
  });
  //  User.associate(models) {
  //   // define association here
    
  // }
  return User;
};