const Sequelize = require('sequelize');
const { INTEGER } = Sequelize;
const db = require('../conn');

const OrderItem = db.define('orderitem', {
  //here we can bring in order_id and product_id via associations.
  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = OrderItem;
