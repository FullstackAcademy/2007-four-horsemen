const Sequelize = require('sequelize');
const { STRING, TEXT } = Sequelize;
const db = require('../conn');

const Review = db.define('review', {
  feedback: {
    type: TEXT,
    validate: {
      len: [0, 10000],
    },
    allowNull: false,
  },

  username: {
    type: STRING,
  },
});

module.exports = Review;
