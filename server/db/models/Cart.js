const Sequelize = require('sequelize');
const db = require('../conn');
const { STRING, INTEGER } = Sequelize;

const Cart = db.define('cart', {
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  quantity: {
    type: INTEGER,
    allowNull: false,
  },

  product_price: {
    type: INTEGER,
    allowNull: false,
  },

  product_name: {
    type: STRING,
    allowNull: false,
  },

  image: {
    type: STRING,
    allowNull: false,
  },
});

module.exports = Cart;
