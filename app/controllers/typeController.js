const { Type } = require('../models');
const { catchError } = require('../utils');

const typeController = {
  getAll: async (req, res) => {
    try {
      const types = await Type.findAll();
      res.json(types);

    } catch (error) {
      catchError(error, res);
    }
  }
}

module.exports = typeController;