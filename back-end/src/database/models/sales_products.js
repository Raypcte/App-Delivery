'use strict';
module.exports = (sequelize, DataTypes) => {
  const salesProducts = sequelize.define('Sales_Products', {
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
    modelName: 'Sales_Products',
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
