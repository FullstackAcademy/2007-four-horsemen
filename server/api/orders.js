const router = require('express').Router();
const Order = require('../db/models/Order');

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create();
  } catch (err) {
    next(err);
  }
});

// // router.post(){
// //     cart = req.body.cart
// //     user = req.body.user
// //     payment = req.body.payment
// //     const newOrder = await creat.Order
// //     cart.map(model => {
// //         newOrder.addmodels(model)
// //     })

// // }
