const { User } = require('../models');
const { catchError } = require('../utils');

const userConfig = {
  include: {
    association: 'trips'
  }
}

const userController = {
  getAll: async (req, res) => {
    try {
      const users = await User.findAll(userConfig);
      res.json(users);

    } catch(error) {
      catchError(error, res);
    }
  },

  getOne: async (req, res) => {
    try {
      const userId = req.params.id;
      const user = await User.findByPk(userId, userConfig);
      res.json(user);

    } catch(error) {
      catchError(error, res);
    }
  }, 

  create: async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.json(user);

    } catch(error) {
      catchError(error, res);
    }
  }, 

  update: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      const userUpdated = await user.update(req.body);
      res.json(userUpdated);

    } catch(error) {
      catchError(error, res);
    }
  }, 

  delete: async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      await user.destroy();
      res.json({msg: "The user has been deleted"});

    } catch(error) {
      catchError(error, res);
    }
  }
}

module.exports = userController;