const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL(9,2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber : DataTypes.STRING,
    saleDate: DataTypes.DATETIME,
    status: DataTypes.STRING,

  }, 
  {
    timestamps: false,
    createdAt: 'saleDate',
  });

  return sale;
};

module.exports = Sale;