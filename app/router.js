const { Router } = require('express');
const router = Router();

const userController = require('./controllers/userController');
const tripController = require('./controllers/tripController');
const stepController = require('./controllers/stepController');
// const stepController = require('./controllers/stepController');

// API users
router.get('/users', userController.getAll);
router.get('/users/:id', userController.getOne);
router.post('/users', userController.create);
router.patch('/users/:id', userController.update);
router.delete('/users/:id', userController.delete);

// API trips
router.route('/trips')
.get(tripController.getAll)
.post(tripController.create);

router.route('/trips/:id')
.get(tripController.getOne) 
.patch(tripController.update)
.delete(tripController.delete);

// API steps
router.post('/steps', stepController.create);

router.route('/steps/:id')
.get(stepController.getOne)
.patch(stepController.update)
.delete(stepController.delete);



// router.post('/trips/:id/steps', tripController.addStepToTrip);
// router.update('/trips/:idTrip/steps/:idSteps', tripController.updateStep);
// router.delete('/trips/:idTrip/steps/:idSteps', tripController.deleteStep);

module.exports = router;