const Sequelize = require('sequelize');
const { STRING, TEXT, DOUBLE, INTEGER } = Sequelize;
const db = require('../conn');

const Product = db.define('product', {
  id: {
    type: INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  description: {
    type: TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  price: {
    type: DOUBLE,
    allowNull: false,
    validate: {
      isNumeric: true,
      notEmpty: true,
      min: 0,
      max: 1000000000,
    },
  },

  image: {
    type: STRING,
    defaultValue: '',
  },

  inventory_quantity: {
    type: INTEGER,
    defaultValue: 0,
  },
});

module.exports = Product;
