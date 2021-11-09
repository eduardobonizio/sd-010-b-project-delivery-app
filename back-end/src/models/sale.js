const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    totalPrice: { type: DataTypes.DECIMAL(9, 2), field: 'total_price' },
    deliveryAddress: { type: DataTypes.STRING(100), field: 'delivery_address' },
    deliveryNumber: { type: DataTypes.STRING(50), field: 'delivery_number' },
    saleDate: {
      type: DataTypes.DATETIME,
      field: 'sale_date',
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: DataTypes.STRING(50),
  }, {
    timestamps: false,
  });

  return sale;
};

module.exports = Sale;
