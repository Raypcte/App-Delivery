'use strict';
import { Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import db from '.';
import Sales from './sales';
import Products from './products';

class Sales_Products extends Model {}

Sales_Products.init({
  sale_id: {
    allowNull: false,
    primaryKey: true,
    type: INTEGER,
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
    type: INTEGER,
    references: {
      model: 'products',
      key: 'id',
    },
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  },
  quantity: {
    allowNull: false,
    type: INTEGER,
  },
}, {
  sequelize: db,
  modelName: 'Sales_Products',
  timestamps: false,
});

Sales_Products.hasMany(Sales, {
  as: 'sale_id',
  primaryKey: 'id'
})

Sales_Products.hasMany(Products, {
  as: 'product_id', 
  primaryKey: 'id',
})

export default Sales_Products;
