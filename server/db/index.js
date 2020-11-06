const db = require('./conn');
const Cart = require('./models/Cart');
const Order = require('./models/Order');
const Payment = require('./models/Payment');
const Product = require('./models/Product');
const Shipment = require('./models/Shipment');
const User = require('./models/User');
const Review = require('./models/Review');

//users
User.hasMany(Order);
User.hasOne(Cart);
Cart.belongsTo(User);

//orders
Order.belongsTo(User);
Order.hasMany(Product);
Product.belongsTo(Order);

//carts
Order.hasOne(Cart);
Cart.belongsTo(Product);

//shipments
Order.hasOne(Shipment);
Shipment.belongsTo(Order);

//payments
Order.hasMany(Payment);
Payment.belongsTo(Order);

//reviews
User.hasMany(Review);
Review.belongsTo(User);
Product.hasMany(Review);
Review.belongsTo(Product);

//ratings
Product.belongsToMany(Review, { through: 'ratings' });
Review.belongsToMany(Product, { through: 'ratings' });

module.exports = {
  db,
  models: {
    Cart,
    Order,
    Payment,
    Product,
    Shipment,
    User,
    Review,
  },
};
