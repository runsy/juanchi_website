const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'juanchi';

// Use connect method to connect to the server
client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
// the following code examples can be pasted here...
module.exports = db;
