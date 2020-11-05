const router = require('express').Router();
const { Review } = require('../db').models;

router.get('/', async (req, res, next) => {
  try {
    res.send(await Review.findAll());
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    res.send(
      await Review.create({
        productId: req.body.productId,
        userId: req.body.userId,
        feedback: req.body.feedback,
        username: req.body.username,
        date: req.body.date,
      })
    );
    console.log(req);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
