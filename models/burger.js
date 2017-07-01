// Sequelize class methods
var Sequelize = require("sequelize");

// Sequelize instance methods
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burger", {
  burger_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  devoured: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  timestamps: false
});

// Syncs with DB
Burger.sync();

module.exports = Burger;
