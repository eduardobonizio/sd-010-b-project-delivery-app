module.exports = (sequelize, DataTypes) => {
  const Sales = sequelize.define('Sales', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    seller_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.DECIMAL(9, 2),
      allowNull: false,
    },
    delivery_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    delivery_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sale_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    tableName: 'sales',
    timestamps: false,
  });

  Sales.associate = (models) => {
    Sales.belongsTo(models.Users, {
      foreignKey: 'user_id',
      as: 'user',
    });

    Sales.belongsTo(models.Users, {
      foreignKey: 'seller_id',
      as: 'seller',
    });

    Sales.hasMany(models.SalesProducts, {
      foreignKey: 'sale_id',
      as: 'products',
    });
  };

  return Sales;
};