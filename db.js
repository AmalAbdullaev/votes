const Sequelize = require('sequelize');
const votesDB = new Sequelize('votes', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  sync: { force: true },
});

votesDB
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

exports.votesDB = votesDB;