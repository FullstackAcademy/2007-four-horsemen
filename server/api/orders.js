const router = require("./products");


router.post(){
    cart = req.body.cart
    user = req.body.user
    payment = req.body.payment
    const newOrder = await creat.Order
    cart.map(model => {
        newOrder.addmodels(model)
    })

}