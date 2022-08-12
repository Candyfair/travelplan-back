const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class User extends Model {};

User.init({
  username: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true
    }
  },
  password: {
    type: DataTypes.TEXT,
    validate: {
      notEmpty: true
    }
  }
}, {
  tableName: 'user',
  sequelize
});

module.exports = User;