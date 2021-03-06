const mysql = require('mysql2');
const credentials = require('./credentials');
 
const connection = mysql.createConnection(credentials);

module.exports = {
  query(sqlStmt) {
    return connection.promise().query(
      sqlStmt
    );
  }
};