'use strict';
const User = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, { timestamps: false });

  User.associate = (models) => {
    models.user.hasMany(models.sale, {
      as: 'sales',
      foreignKey: 'sale_id'
    });
  };

  return User;
};

module.exports = User;
