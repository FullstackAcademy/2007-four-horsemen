const Sequelize = require('sequelize');
const { DOUBLE, INTEGER, ENUM } = Sequelize;
const db = require('../conn');

const Payment = db.define('payment', {
  card_type: {
    type: ENUM('Visa', 'Mastercard', 'American Express', 'Discover'),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  //need to use bcrypt to hide card details
  card_number: {
    type: DOUBLE,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  card_exp_month: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
    },
  },

  card_exp_year: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
    },
  },
  card_security_code: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
      isNumeric: true,
    },
  },
});

module.exports = Payment;
