const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("saleProduct",
  { quantity: DataTypes.INTEGER },
  {
    timestamps: false,
  });

  salesProduct.associate = (models) => {
    models.product.belongsToMany(models.sale, 
      {
        as: 'products',
        through: salesProduct,
        otherKey: 'sale_id',
        foreignKey: 'product_id',
      },
    );
    models.sale.belongsToMany(models.product, 
      {
        as: 'sales',
        through: salesProduct,
        otherKey: 'product_id',
        foreignKey: 'sale_id',
      },
    );
  };

  return salesProduct;
};

module.exports = salesProduct;

// models/UserBook.js

  // const UserBook = sequelize.define('UserBook',
  //   {},
  //   { timestamps: false },
  // );

  // UserBook.associate = (models) => {
  //   models.Book.belongsToMany(models.User, {
  //     as: 'users',
  //     through: UserBook,
  //     foreignKey: 'book_id',
  //     otherKey: 'user_id',
  //   });
  //   models.User.belongsToMany(models.Book, {
  //     as: 'books',
  //     through: UserBook,
  //     foreignKey: 'user_id',
  //     otherKey: 'book_id',
  //   });
  // };

  // return UserBook;
