const mysql = require('mysql');

exports.conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_todo',
});
