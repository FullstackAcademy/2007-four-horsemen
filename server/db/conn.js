// Here we establish connection to our postgres
// database by initiating a Sequelize instance so-called 'db'.

const Sequelize = require('sequelize');
const db = new Sequelize(
  process.env.DATABASE_URL || 'postgres://localhost:5432/lamboshop'
);

module.exports = db;
