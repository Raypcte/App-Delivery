'use strict';
module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('sales_products', {
    sale_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'sales',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    product_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.INTEGER,
      references: {
        model: 'products',
        key: 'id',
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    quantity: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    modelName: 'sales_products',
    timestamps: false,
  });

  salesProducts.associate = (models) => {
    salesProducts.hasMany(models.sales, {
      as: 'sale',
      primaryKey: 'id'
    })

    salesProducts.hasMany(models.products, {
      as: 'product', 
      primaryKey: 'id',
    })
  }
  return salesProducts;
}
