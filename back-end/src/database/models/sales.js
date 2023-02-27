'use strict';
import { Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import db from '.';
import User from './users';

class Sales extends Model {}

Sales.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    field: 'user_id',
    references: {
      model: 'User',
      key: 'id',
    },
  },
  sellerId: {
    type: INTEGER,
    allowNull: false,
    field: 'seller_id',
    references: {
      model: 'User',
      key: 'id',
    },
  },
  totalPrice: {
    type: DECIMAL,
    allowNull: false,
    field: 'total_price',
  },
  deliveryAdress: {
    type: STRING,
    allowNull: false,
    field: 'delivery_adress',
  },
  deliveryNumber: {
    type: STRING,
    allowNull: false,
    field: 'delivery_number',
  },
  saleDate: {
    type: DATE,
    allowNull: false,
    field: 'sale_date',
  },
  status: {
    type: STRING,
    allowNull: false,
  }
}, {
  sequelize: db,
  modelName: 'sales',
  timestamps: false,
});

Sales.hasOne(User, { foreignKey: 'id', as: 'userId' });
Sales.hasOne(User, { foreignKey: 'id', as: 'sellerId' });

User.belongsTo(Sales, {foreignKey: 'id', as: 'userId' });
User.belongsTo(Sales, { foreignKey: 'id', as: 'sellerId' });


export default Sales;

