const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class Trip extends Model {};

Trip.init({
  tripName: DataTypes.TEXT,
}, {
  tableName: 'trip',
  sequelize
});

module.exports = Trip;