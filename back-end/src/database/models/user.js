'use strict';
const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  { timestamps: false });
  user.associate = (models) => {
    user.hasOne('Sales'), {
      foreignKey: 'seller_id',
      as: 'sale'
    }
  }
  return user;
};
module.exports = User;
