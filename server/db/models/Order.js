const Sequelize = require('sequelize');
const { DATEONLY } = Sequelize;
const db = require('../conn');

const Order = db.define('order', {
  //important parts in order would be customerid which would link to another model called orderItem
  //changed date type to dateonly in order to filterout the unnecessary chars attached to date
  date: {
    type: DATEONLY,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = Order;
