const Sequelize = require('sequelize');
const { DATE, STRING } = Sequelize;
const db = require('../conn');

const Cart = db.define('cart', {
  session_id: {
    type: STRING,
  },

  created_date: {
    type: DATE,
  },
});

module.exports = Cart;
