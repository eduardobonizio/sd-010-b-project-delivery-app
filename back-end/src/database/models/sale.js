module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      userId: { type: DataTypes.INTEGER, foreingKey: true },
      sellerId: { type: DataTypes.INTEGER, foreingKey: true },
      totalPrice: DataTypes.DECIMAL(9, 2),
      deliveryAddress: DataTypes.STRING,
      deliveryNumber: DataTypes.STRING,
      saleDate: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      status: DataTypes.STRING,
    },
    { timestamps: false,  tableName: 'sales', underscored: true  }
  );

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreingKey: "user_id",
      as: "users",
    });
  };

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, {
      foreingKey: "seller_id",
      as: "seller",
    });
  };
  return Sale;
};
