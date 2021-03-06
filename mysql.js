const knex = require("knex");
require("dotenv");

const db = knex({
  client: "mysql",
  connection: {
    host: `${process.env.MYSQL_HOST}`,
    user: `${process.env.MYSQL_USER}`,
    password: `${process.env.MYSQL_PASSWORD}`,
    database: `${process.env.MYSQL_DATABASE}`,
    timezone: "utc"
  }
});

module.exports = {
  db
};
