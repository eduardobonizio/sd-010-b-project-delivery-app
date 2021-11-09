module.exports = (sequelize, DataTypes) => {
  const sale = sequelize.define('sale', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING,
  },
  {
    timestamps: false,
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