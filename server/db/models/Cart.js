const Sequelize = require('sequelize');
const { DATE, STRING, INTEGER } = Sequelize;
const db = require('../conn');

const Cart = db.define('cart', {
  session_id: {
    type: STRING,
  },

  created_date: {
    type: DATE,
  },

  quantity: {
    type: INTEGER,
  },
});

module.exports = Cart;
