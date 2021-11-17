const mysql = require('mysql2/promise');
require('dotenv').config();

const host = process.env.MYSQL_HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.MYSQL_DATABASE;

const connection = mysql.createPool({
  host,
  user,
  password,
  database,
});

module.exports = connection;
