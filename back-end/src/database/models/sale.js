module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      userId: { type: DataTypes.INTEGER, foreingKey: true },
      sallerId: { type: DataTypes.INTEGER, foreingKey: true },
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      status: DataTypes.STRING,
    },
    { timestamps: false }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreingKey: "user_id",
      as: "users",
    });
  };

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreingKey: "sellerId",
      as: "seller",
    });
  };
  return Sale;
};
