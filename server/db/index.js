const db = require('./conn');
const Cart = require('./models/Cart');
const Customer = require('./models/Customer');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');
const Payment = require('./models/Payment');
const Product = require('./models/Product');
const Shipment = require('./models/Shipment');
const User = require('./models/User');

Customer.hasMany(Order);
Order.belongsTo(Customer);

Order.hasMany(Product);
Product.belongsTo(Order);

Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

Product.hasMany(OrderItem);
OrderItem.belongsTo(Product);

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
    OrderItem,
    Payment,
    Product,
    Shipment,
    User,
  },
};
