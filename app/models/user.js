const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class User extends Model {};

User.init({
  username: DataTypes.TEXT,
  email: DataTypes.TEXT,
  password: DataTypes.TEXT
}, {
  tableName: 'user',
  sequelize
});

module.exports = User;