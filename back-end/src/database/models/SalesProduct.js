module.exports = (sequelize, DataTypes) =>{
  const SalesProduct = sequelize.define('SalesProduct',{
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER
  },
  {
    timestamps: false,
    tableName: 'SalesProducts',
    underscored: true,
  });
  SalesProduct.associate = (models) =>{
    models.Product.belongsToMany(models.Sale, {
      as: 'Product', 
      through: SalesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'Sale',
      through: SalesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id', 
    });
  }
  
  return SalesProduct;
  }