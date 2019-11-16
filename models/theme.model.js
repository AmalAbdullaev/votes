const Sequelize = require('sequelize');
const votesDB = require('../db').votesDB;

const Theme = votesDB.define('Theme', {
    name: {
      type: Sequelize.STRING(1024)
    },
    voteYes: {
      type: Sequelize.INTEGER
    },
    voteNo: {
      type: Sequelize.INTEGER
    }
  });
exports.Theme = Theme;