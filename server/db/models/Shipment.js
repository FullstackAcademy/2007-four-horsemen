const Sequelize = require('sequelize');
const { STRING, DATEONLY } = Sequelize;
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
    //again using dateonly would simplify the date removing unnecessary chars
    type: DATEONLY,
  },
});

module.exports = Shipment;
