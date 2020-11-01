const router = require('express').Router();
const Order = require('../db/models/Order');

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).send(newOrder);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
