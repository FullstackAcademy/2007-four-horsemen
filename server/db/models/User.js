const Sequelize = require('sequelize');
const { STRING, BOOLEAN } = Sequelize;
const db = require('../conn');

const User = db.define('user', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  //we would need to use bcrypt later to hash the userpassword in our db
  password: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },

  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
