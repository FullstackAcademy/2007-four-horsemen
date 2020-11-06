const Sequelize = require('sequelize');
const { DATE, ENUM, STRING, INTEGER } = Sequelize;
const db = require('../conn');

const Order = db.define('order', {
  total: {
    type: INTEGER,
  },
  session_id: {
    type: STRING,
  },

  order_date: {
    type: DATE(6),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  shipping_address: {
    type: STRING,
  },

  order_status: {
    type: ENUM('cart', 'created', 'processing', 'cancelled', 'completed'),
    allowNull: false,
  },

});

module.exports = Order;
