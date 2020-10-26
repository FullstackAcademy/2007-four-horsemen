const Sequelize = require('sequelize');
const { ARRAY, TEXT } = Sequelize;
const db = require('../conn');

const Review = db.define('review', {
  feedback: {
    type: ARRAY(TEXT),
  },
});

module.exports = Review;
