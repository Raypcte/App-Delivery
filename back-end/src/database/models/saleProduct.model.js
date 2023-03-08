'use strict';

module.exports = (sequelize, DataTypes) => {
  const saleProduct = sequelize.define('salesProducts', {
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'sale',
        key: 'id',
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id',
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    modelName: 'saleProduct',
    tableName: 'sales_products',
    underscored: true,
    timestamps: false,
  });

  // saleProduct.associate = ({ sales, products }) => {
  //   saleProduct.belongsTo(sales, { foreignKey: 'saleId', as: 'sale' });
  //   saleProduct.belongsTo(products, { foreignKey: 'productId', as: 'product' });

  //   sales.hasMany(saleProduct, { foreignKey: 'saleId', as: 'sale' });
  //   products.hasMany(saleProduct, { foreignKey: 'productId', as: 'product' });
  // }

  return saleProduct;
};
