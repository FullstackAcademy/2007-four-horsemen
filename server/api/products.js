const router = require('express').Router();

const { Product } = require('../db').models;

router.get('/', async (req, res, next) => {
  try {
    res.send(await Product.findAll({ order: ['id'] }));
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    res.send(await Product.findByPk(req.params.id));
  } catch (err) {
    next(err);
  }
});
module.exports = router;
