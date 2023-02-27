'use strict';
import { Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import db from '.';

class Products extends Model {}

Products.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  name: {
    allowNull: false,
    type: STRING,
  },
  price: {
    allowNull: false,
    type: DECIMAL,
  },
  urlImage: {
    field: 'url_image',
    type: STRING,
  }
}, {
  sequelize: db,
  modelName: 'products',
  timestamps: false,
});

export default Products;
