const db = require('./conn');
const Order = require('./models/Order');
// const Payment = require('./models/Payment');
const Cart = require('./models/Cart');
const Product = require('./models/Product');
const User = require('./models/User');
const Review = require('./models/Review');
const Session = require('./models/Session');

//users
User.hasMany(Order);
User.hasMany(Session);
Session.belongsTo(User);

//orders
Order.belongsTo(User);
Product.belongsToMany(Order, { through: Cart });
Order.belongsToMany(Product, { through: Cart });

//payments
// Order.hasMany(Payment);
// Payment.belongsTo(Order);

//reviews
User.hasMany(Review);
Review.belongsTo(User);
Product.hasMany(Review);
Review.belongsTo(Product);

//ratings
// Product.belongsToMany(Review, { through: 'ratings' });
// Review.belongsToMany(Product, { through: 'ratings' });

module.exports = {
  db,
  models: {
    Order,
    // Payment,
    Product,
    User,
    Review,
    Session,
  },
};
