const Sequelize = require('sequelize');
const { STRING, INTEGER, BOOLEAN } = Sequelize;
const db = require('../conn');

const Customer = db.define('customer', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  email: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isEmail: true,
    },
  },

  address: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  phoneNum: {
    type: INTEGER,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  hasAccount: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Customer;
