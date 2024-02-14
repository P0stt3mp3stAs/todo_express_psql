const { Pool } = require("pg");

const pool = new Pool({
  user: "elghali",
  host: "localhost",
  database: "todos_db",
  password: "2399",
  port: 5432,
});

module.exports = pool;