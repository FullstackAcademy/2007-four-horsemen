const router = require('express').Router();

const { User } = require('../db').models;

router.get('/', async (req, res, next) => {
  try {
    res.send(await User.findAll({ order: ['id'] }));
  } catch (ex) {
    next(ex);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.send(await User.findByPk(req.params.id));
  } catch (ex) {
    next(ex);
  }
});
module.exports = router;
