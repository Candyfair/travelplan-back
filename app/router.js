const { Router } = require('express');
const router = Router();

const tripController = require('./controllers/tripController');

// API trips
router.get('/trips', tripController.getTrips);
router.get('/trips/:id', tripController.getTrip);

module.exports = router;