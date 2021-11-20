module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    userId: DataTypes.INTEGER,
    sellerId: DataTypes.INTEGER,
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });

  sale.associate = (models) => {
    sale.belongsTo(models.user, {
      foreignKey: 'seller_id',
      as: 'seller',
    })
  }
  sale.associate = (models) => {
    sale.belongsTo(models.user, {
      foreignKey: 'user_id',
      as: 'user',
    })
  }

  return sale;
};