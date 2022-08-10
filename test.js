require('dotenv').config();

const { Trip } = require('./app/models');

Trip.findAll().then(trips => {
  for (const trip of trips) {
    console.log(trip.tripName);
  }
})
  .catch(error => console.error(error));