const router = require('express').Router();
const Order = require('../db/models/Order');
const User = require('../db/models/User');
const isAdmin = require('../middleware/adminAuth');

router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body);
    res.status(201).send(newOrder);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async(req, res, next) =>{
  try{
    const order = await Order.findByPk(req.params.id);
    console.log(req.body)
    // await order.update({order_status:req.body.order_status})
    await order.update(req.body)
    res.send(order)
}
catch(ex){
    next(ex)
}
})

router.get('/myorders:id', async (req, res, next) => {
  try {
    res.send(await Order.findAll({ where: { userId: req.params.id }}));
  } catch (err) {
    next(err);
  }
});

router.get('/',isAdmin,async(req,res,next)=>{
  try{
    res.send(await Order.findAll({order:['id'],include:{model:User}}))
  }
  catch(err){
    next(err);
  }
});

module.exports = router;
