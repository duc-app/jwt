'use strict';
const mysql = require('mysql');

const db = mysql.createConnection({
  host:  "localhost",
  user:  "api",
  password:  "api@123",
  database:  "api"
});

module.exports = db