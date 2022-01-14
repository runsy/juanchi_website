const Database = require('better-sqlite3');
const db = new Database('data/juanchi.db', { verbose: console.log });

const create = `CREATE TABLE IF NOT EXISTS Comments (
  Comment_ID INTEGER PRIMARY KEY AUTOINCREMENT,
  Idea_ID VARCHAR(256),
  Text TEXT,
  Creation_Date INTEGER
);`;

db.exec(create);

module.exports = db;
