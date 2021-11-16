const mysql = require('mysql2/promise');
require('dotenv').config();

const host = process.env.MYSQL_HOST || 'localhost';
const user = process.env.MYSQL_USER || 'thiagomarchini';
const password = process.env.MYSQL_PASSWORD || 'tfdm1969';
const database = process.env.MYSQL_DATABASE || 'delivery-app';

const connection = mysql.createPool({
  host,
  user,
  password,
  database,
});

module.exports = connection;
