'use strict';
import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Users extends Model {}

Users.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  name: {
    type: STRING(255),
    allowNull: false,
  },
  email: {
    type: STRING(255),
    allowNull: false,
  },
  password: {
    type: STRING(255),
    allowNull: false,
  },
  role: {
    type: STRING(255),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default Users;
