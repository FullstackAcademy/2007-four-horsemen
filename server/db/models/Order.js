const Sequelize = require('sequelize');
const { STRING, INTEGER, DATE } = Sequelize;
const db = require('../conn');
const moment = require('moment');

const Order = db.define('order', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  quantity: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  date: {
    type: DATE,
    allowNull: false,
    validate: {
      notEmpty: true,
      isDate: true,
    },
    get: function () {
      return moment(this.getDataValue('date')).format('MM/DD/YYYY');
    },
  },
});

module.exports = Order;
