const Sequelize = require('sequelize');
const { STRING, DATE } = Sequelize;
const db = require('../conn');

const Shipment = db.define('shipment', {
  tracking_num: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  shipment_date: {
    type: DATE,
  },
});

module.exports = Shipment;
