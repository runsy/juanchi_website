var sqlite3 = require("sqlite3").verbose();
var path = require('path');

var db_name = path.join(__dirname, "", "juanchi.db");

var db = new sqlite3.Database(db_name, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful connection to the database 'juanchi.db'");
});

var sql_create = `CREATE TABLE IF NOT EXISTS Comments (
  Comment_ID INTEGER PRIMARY KEY AUTOINCREMENT,
  Idea_ID VARCHAR(256),
  Author VARCHAR(100) NOT NULL,
  Text TEXT
);`;

db.run(sql_create, err => {
  if (err) {
    return console.error(err.message);
  }
  console.log("Successful creation of the 'Comments' table");
});

module.exports = db;
