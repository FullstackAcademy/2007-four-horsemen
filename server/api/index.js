const router = require('express').Router();

router.use('/products', require('./products'));

router.use('/users', require('./users'));

router.use('/auth', require('./login'));

router.use('/cart', require('./cart'));

router.use('/orders', require('./orders'));

router.use('/reviews', require('./reviews'));

router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
