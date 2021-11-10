const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(50),
  });

  Sale.associate = (models) => {
    Sale.belogsTo(models.User, { foreignKey: 'id' });
    Sale.belogsTo(models.Product, { through: 'SalesProducts' });
  };
  
  return Sale;
};

module.exports = User;