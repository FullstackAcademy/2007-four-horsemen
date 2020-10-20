const Sequelize = require('sequelize');
const { DATE, INTEGER, ENUM } = Sequelize;
const db = require('../conn');

const Payment = db.define('payment', {
  payment_type: {
    type: ENUM('credit', 'bitcoin', 'venmo'),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  payment_date: {
    type: DATE,
    allowNull: false,
    validate: {
      isDate: true,
      notEmpty: true,
    },
  },
  amount: {
    type: INTEGER,
  },
});

module.exports = Payment;
