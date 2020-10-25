const Sequelize = require('sequelize');
const { DATE, ENUM } = Sequelize;
const db = require('../conn');

const Order = db.define('order', {
  payment_date: {
    type: DATE(6),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  order_date: {
    type: DATE(6),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  shipping_date: {
    type: DATE(6),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  shipping_method: {
    type: ENUM('FedEx', 'USPS', 'UPS'),
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  order_status: {
    type: ENUM('processing', 'cancelled', 'completed'),
  },
});

module.exports = Order;

//add status with ENUM('PROCESSING', 'CANCELLED', 'COMPLETED')
