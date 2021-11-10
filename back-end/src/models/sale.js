const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    totalPrice: { type: DataTypes.DECIMAL(9, 2), allowNull: false },
    deliveryAddress: { type: DataTypes.STRING(100), allowNull: false },
    deliveryNumber: { type: DataTypes.STRING(50), allowNull: false },
    saleDate: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    status: { type: DataTypes.STRING(50), allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, allowNull: false, foreignKey: true },
  }, { timestamps: false, underscored: true });

  sale.associate = (models) => {
    sale.belongsTo(models.User, {
      foreignKey: 'user_id', as: 'user',
    });
    sale.belongsTo(models.User, {
      foreignKey: 'seller_id', as: 'seller', 
    }); 
  };

  return sale;
};

module.exports = Sale;
