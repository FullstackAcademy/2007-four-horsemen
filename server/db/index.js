
const db = require('./conn');
const {
  Cart,
  Customer,
  Order,
  Payment,
  Product,
  Shipment,
  User,
} = require('../db/models');

User.hasMany(Customer);
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

