module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    user_id: { 
      type: DataTypes.INTEGER, 
      foreignKey: true, 
    },
    // TODO: Check how integrate User.role = seller to this id
    seller_id: { 
      type: DataTypes.INTEGER, 
      foreignKey: true, 
    },
    total_price: DataTypes.DECIMAL,
    delivery_address: DataTypes.STRING,
    delivery_number: DataTypes.STRING,
    sale_date: DataTypes.DATE,
    status: DataTypes.STRING
  },
  { timestamps: false, tableName: 'sales' });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User, { 
      foreignKey: 'user_id', as: 'user',
    });

    Sale.belongsTo(models.User, { 
      foreignKey: 'seller_id', as: 'seller',
    });
  };

  return Sale;
};