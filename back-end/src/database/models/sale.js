const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define("Sale", {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING(50),
  }, {
    timestamps: false,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { foreignKey: 'id' });
    // Sale.belongsTo(models.Product, { through: 'SalesProducts' }); se der ruim descomenta
  };
  
  return Sale; 
};

module.exports = Sale;