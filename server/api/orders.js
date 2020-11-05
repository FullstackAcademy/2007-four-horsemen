const router = require('express').Router();
const Order = require('../db/models/Order');
const User = require('../db/models/User');

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).send(newOrder);
  } catch (err) {
    next(err);
  }
});

router.get('/myorders:id', async (req, res, next) => {
  try {
    res.send(await Order.findAll({ where: { userId: req.params.id } }));
  } catch (err) {
    next(err);
  }

router.get('/',async(req,res,next)=>{
  try{
    res.send(await Order.findAll({order:['id'],include:{model:User}}))
  }
  catch(err){

    next(err);
  }
});

module.exports = router;
