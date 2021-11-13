module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define(
    "Sale",
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      user_id: { type: DataTypes.INTEGER, foreingKey: true },
      seller_id: { type: DataTypes.INTEGER, foreingKey: true },
      total_price: DataTypes.DECIMAL(9, 2),
      delivery_address: DataTypes.STRING(100),
      delivery_number: DataTypes.STRING(50),
      sale_date: DataTypes.DATE,
      status: DataTypes.STRING(50),
    },
<<<<<<< HEAD
    { timestamps: false,
    tableName:"sales" }
=======
    { 
      timestamps: false,
      tableName: "sales",
     }
>>>>>>> 70fc70e24e2e867a77394d20adf0a3dbeea98093
  );

  Sale.associate = (models) => {
    Sale.belongsTo(
      models.User,
      { foreingKey: "user_id", as: "user" },
      { foreingKey: "seller_id", as: "seller" }
    );
  };
  return Sale;
};
