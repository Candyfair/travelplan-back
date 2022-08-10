const { Trip } = require('../models');

const listConfig = {
  include: {
    association: 'steps', 
    include: 'type'
  }
}

const tripController = {
  getTrips: async (req, res) => {
    try {
      // On récupère toutes les listes
      const trips = await Trip.findAll(listConfig);
  
      // On les renvoie au format json
      res.json(trips);

    } catch(error) {
      console.error(error);
      res.status(500).json({error: error.message});
    }
  }, 

  getTrip: async (req, res) => {
    try {
      // On récupère la liste qui correspond à l'id de la route
      const tripId = req.params.id;
      const trip = await Trip.findByPk(tripId, listConfig);

      // On renvoie la liste
      res.json(trip);

    } catch(error) {
      console.error(error);
      res.status(500).json({error: error.message});
    }
  }
}

module.exports = tripController;