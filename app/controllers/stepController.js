const { Step } = require('../models');
const { catchError } = require('../utils');

const stepConfig = {
  include: 'type',
  order: ['position', 'ASC']
};

const stepController = {
  getOne: async (req, res) => {
    try {
      const step = await Step.findByPk(req.params.id, {
        include: 'type',
        order: ['position', 'ASC']
      });
      res.json(step);

    } catch(error) {
      catchError(error, res);
    }
  },

  create: async (req, res) => {
    try {
      const step = await Step.create(req.body);
      res.json(step);

    } catch(error) {
      catchError(error, res);
    }
  },

  update: async (req, res) => {
    try {
      const step = await Step.findByPk(req.params.id, {
        include: 'type'
      });
      await step.update(req.body);
      res.json(step);

    } catch(error) {
      catchError(error, res);
    }
  }, 

  delete: async (req,res) => {
    try {
      const step = await Step.findByPk(req.params.id);
      await step.destroy();
      res.json({msg: "The step has been deleted"});

    } catch(error) {
      catchError(error, res);
    }
  }
};

module.exports = stepController;