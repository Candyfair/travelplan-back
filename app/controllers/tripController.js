const { Trip, Step } = require('../models');
const { catchError } = require('../utils');

const tripConfig = {
  include: {
    association: 'steps',
    include: 'type'
  },
  order: [
    ['position', 'ASC'],
    ['steps', 'position', 'ASC']
  ]
};

const tripController = {
  getAll: async (req, res) => {
    try {
      // On récupère toutes les listes
      const trips = await Trip.findAll(tripConfig);

      // On les renvoie au format json
      res.json(trips);

    } catch (error) {
      catchError(error, res);
    }
  },

  getOne: async (req, res) => {
    try {
      // On récupère la liste qui correspond à l'id de la route
      const trip = await Trip.findByPk(req.params.id, {
        include: {
          association: 'steps',
          include: 'type',
          order: [
            ['position', 'ASC']
          ] 
        }
      });

      // On renvoie la liste
      res.json(trip);

    } catch (error) {
      catchError(error, res);
    }
  },

  create: async (req, res) => {
    try {
      const trip = await Trip.create(req.body);
      res.json(trip);

    } catch (error) {
      catchError(error, res);
    }
  },

  update: async (req, res) => {
    try {
      const trip = await Trip.findByPk(req.params.id);
      await trip.update(req.body);
      res.json(trip);

    } catch (error) {
      catchError(error, res);
    }
  },

  delete: async (req, res) => {
    try {
      const trip = await Trip.findByPk(req.params.id);
      await trip.destroy();
      res.json({ msg: "The trip has been deleted" });

    } catch (error) {
      catchError(error, res);
    }
  },

  getStepsFromTrip: async (req, res) => {
    try {
      const steps = await Step.findAll({
        where: {
          trip_id: req.params.id,
        },
        include: 'type',
      });
      res.json(steps);

    } catch (error) {
      catchError(error, res);
    }
  },

}

module.exports = tripController;