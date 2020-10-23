
const db = require('./conn');
// const {
//   Cart,
//   Customer,
//   Order,
//   Payment,
//   Product,
//   Shipment,
//   User,
// } = require('../db/models');
// throw Error: Cannot find module '../db/models'

const Cart = require('./models/Cart')
const Customer = require('./models/Customer')
const Order = require('./models/Order')
const Payment = require('./models/Payment')
const Product = require('./models/Product')
const Shipment = require('./models/Shipment')
const User = require('./models/User')
//debug/////////////////////////////

User.hasMany(Customer);  //why user has many customers??
Customer.belongsTo(User);

Customer.hasMany(Order);
Order.belongsTo(Customer);

Order.hasMany(Product);
Product.belongsTo(Order);

Shipment.hasMany(Order);
Order.belongsTo(Shipment);

Customer.hasMany(Payment);
Payment.belongsTo(Customer);

User.hasOne(Cart);
Cart.belongsTo(User);

module.exports = {
  db,
  models: {
    Cart,
    Customer,
    Order,
    Payment,
    Product,
    Shipment,
    User,
  },
};

