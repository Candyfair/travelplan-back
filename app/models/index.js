const User = require('./user');
const Trip = require('./trip');
const Step = require('./step');
const Type = require('./type');

// Associations
// User et Trip
User.hasMany(Trip, {
  as: 'trips',
  foreignKey: 'user_id'
});

Trip.belongsTo(User, {
  as: 'user',
  foreignKey: 'user_id'
});

// Trip et Step
Trip.hasMany(Step, {
  // Nom de la propriété qui contiendra les étapes (step) du voyage (trip)
  as: 'steps',
  foreignKey: 'trip_id'
});

Step.belongsTo(Trip, {
  as: 'trip',
  foreignKey: 'trip_id'
});

// Step et Type
Type.hasMany(Step, {
  as: 'steps',
  foreignKey: 'step_type'
});

Step.belongsTo(Type, {
  as: 'type',
  foreignKey: 'step_type'
});

module.exports = { User, Trip, Step, Type }