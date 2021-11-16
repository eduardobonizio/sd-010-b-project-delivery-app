module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: {type: DataTypes.INTEGER, foreignKey: true},
    sellerId: {type: DataTypes.INTEGER, foreignKey: true},
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, { timestamps: false, underscored: true });

  sale.associate = (models) => {
    sale.belongsTo(models.user, { foreignKey: 'userId', as: 'user'});
    sale.belongsTo(models.user, { foreignKey: 'sellerId', as: 'seller'});
  };

  return sale;
};
