const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class Step extends Model {};

Step.init({
  position: DataTypes.INTEGER,
  startDate: DataTypes.DATE,
  endDate: DataTypes.DATE,
  startTime: DataTypes.TIME,
  endTime: DataTypes.TIME,
  pointDeparture: DataTypes.TEXT,
  pointArrival: DataTypes.TEXT,
  details: DataTypes.TEXT
}, {
  tableName: 'step',
  sequelize
});

module.exports = Step;