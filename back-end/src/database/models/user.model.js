const { Model, INTEGER, STRING } = require('sequelize');
const db = require('.');

class User extends Model { }

User.init({
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
  email: {
    allowNull: false,
    type: STRING,
    unique: true,
  },
  password: {
    allowNull: false,
    type: STRING,
  },
  role: {
    allowNull: false,
    type: STRING,
  },
}, {
  sequelize: db,
  modelName: 'user',
  tableName: 'users',
  timestamps: false,
});

module.exports = User;
