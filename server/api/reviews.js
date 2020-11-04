const router = require('express').Router();
const { Review } = require('../db').models;

router.get('/', async (req, res, next) => {
  try {
    const reviews = await Review.findAll();
    res.send(reviews);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const newReview = await Review.create(req.body);
    res.status(201).send(newReview);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
