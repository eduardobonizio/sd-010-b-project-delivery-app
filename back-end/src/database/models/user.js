module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
   id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
   name: DataTypes.STRING(255),
   email: DataTypes.STRING(255),
   password: DataTypes.STRING(255),
   role: DataTypes.STRING(255),
  },
  { timestamps: false,

  });
  // User.associate = (models) => {
  //   User.hasMany(models.Sale,{ foreingKey: "user_id", as: 'customer'},{ foreingKey: "seller_id", as: 'seller'})
  // }

  return User;
};