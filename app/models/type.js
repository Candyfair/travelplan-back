const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class Type extends Model {};

Type.init({
  code: DataTypes.TEXT,
  name: DataTypes.TEXT
}, {
  tableName: 'step_type',
  sequelize
});

module.exports = Type;