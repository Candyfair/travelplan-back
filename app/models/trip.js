const sequelize = require('../database');
const { DataTypes, Model } = require('sequelize');

class Trip extends Model { };

Trip.init({
  tripName: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  slug: DataTypes.TEXT,
  position: DataTypes.INTEGER
}, {
  tableName: 'trip',
  sequelize
});

module.exports = Trip;