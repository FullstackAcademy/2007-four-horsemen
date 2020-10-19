const Sequelize = require('sequelize');
const { STRING, TEXT, DOUBLE } = Sequelize;
const db = require('../conn');

const Lambo = db.define('lambo', {
  modelName: {
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
});

module.exports = Lambo;
