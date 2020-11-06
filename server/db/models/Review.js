const Sequelize = require('sequelize');
const { STRING, TEXT, DATE } = Sequelize;
const db = require('../conn');

const Review = db.define('review', {
  feedback: {
    type: TEXT,
    validate: {
      len: [0, 10000],
      notEmpty: true,
    },
    allowNull: false,
  },

  username: {
    type: STRING,
  },

  date: {
    type: DATE(6),
  },
});

module.exports = Review;
