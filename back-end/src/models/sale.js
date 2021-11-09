const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    totalPrice: { type: DataTypes.DECIMAL(9, 2), field: 'total_price' },
    deliveryAddress: DataTypes.STRING(100),
    deliveryNumber: DataTypes.STRING(50),
    saleDate: {
      type: DataTypes.DATETIME,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: DataTypes.STRING(50),
  }, {
    timestamps: false,
    underscored: true,
  });

  return sale;
};

module.exports = Sale;
