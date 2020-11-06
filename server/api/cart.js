const router = require('express').Router();
const  { models: { Cart } }  = require('../db');
console.log('what it is', Cart);
//const {Cart} = require('../db').modules();

router.get('/', async (req, res, next) => {
    try{
        const cart = await Cart.findAll();
        console.log('cart api ', cart)
        res.send('hello')
    } catch(err) {
        next(err)
    }   
});

router.post('/', async (req, res, next) => {
    try{
        const cart = await Cart.create(req.body);
        console.log('api post ', cart)
        res.send(cart);
    } catch(err) {
        next(err)
    }
})

module.exports = router;