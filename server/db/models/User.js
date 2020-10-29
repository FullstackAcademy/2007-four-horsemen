const Sequelize = require('sequelize');
const { STRING, BOOLEAN, INTEGER } = Sequelize;
const db = require('../conn');
const bcrypt = require('bcrypt');

const User = db.define('user', {
  name: {
    type: STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
      isAlpha: true,
    },
  },
  email: {
    type: STRING,
    allowNull: false,
    validate: {
      isEmail: true,
      notEmpty: true,
    },
    unique: {
      args: true,
      msg: 'Email address is already taken!',
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
      isNumeric: true,
    },
  },

  hasAccount: {
    type: BOOLEAN,
    defaultValue: false,
  },

  username: {
    type: STRING,
    allowNull: false,
    defaultValue: 'none',
    validate: {
      notEmpty: true,
      isAlphanumeric: true,
    },
  },
  //we would need to use bcrypt later to hash the userpassword in our db
  password: {
    type: STRING,
    allowNull: false,
    defaultValue: 'none',
    validate: {
      notEmpty: true,
    },
    // set(chars) {
    //   const hash = bcrypt.hashSync(chars, 10);
    //   this.setDataValue('password', hash);
    // },
  },

  isAdmin: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

module.exports = User;
