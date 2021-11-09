module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('Sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: {type: DataTypes.INTEGER, foreignKey: true},
    seller_id: {type: DataTypes.INTEGER, foreignKey: true},
    total_price: DataTypes.DECIMAL(9,2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, { timestamps: false });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'user_id', as: 'user'});
    Sale.belongsTo(models.User, { foreignKey: 'seller_id', as: 'seller'});
  };
  return User;
};
