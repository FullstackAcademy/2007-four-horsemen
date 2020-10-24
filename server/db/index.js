const db = require('./conn');


const Cart = require('./models/Cart')
const Customer = require('./models/Customer')
const Order = require('./models/Order')
const Payment = require('./models/Payment')
const Product = require('./models/Product')
const Shipment = require('./models/Shipment')
const User = require('./models/User')

/////customer view:
User.hasMany(Order);
User.hasOne(Cart);
Cart.belongsTo(User);



////order view:
Order.belongsTo(User);
Order.hasMany(Product);
Product.belongsTo(Order);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

Order.hasOne(Shipment)
Shipment.belongsTo(Order);
Order.hasMany(Payment);
Payment.belongsTo(Order);


module.exports = {
  db,
  models: {
    Cart,
    Customer,
    Order,
    OrderItem,
    Payment,
    Product,
    Shipment,
    User,
  },
};
